/**
 */

var http = require('request');

const url = require('url');

const PROXY_GET = 'get';
const PROXY_DELETE = 'delete';
const PROXY_PATCH = 'patch';
const PROXY_POST = 'post';
const PROXY_PUT = 'put';

/************************************************************
 * Handle proxy requests
 ************************************************************/

/**
 * GET - Get record(s)
 */
exports.get = function (req, res) {
    console.log( 'in io get ' );
   
    proxyCommon(req, res, PROXY_GET);
};

/**
 * PATCH - Update partial record
 */
exports.patch = function (req, res) {
    proxyCommon(req, res, PROXY_PATCH, JSON.stringify(req.body));
};

/**
 * POST - Create new record
 */
exports.post = function (req, res) {
    proxyCommon(req, res, PROXY_POST, JSON.stringify(req.body));
};

/**
 * PUT - Update
 */
exports.put = function (req, res) {
    proxyCommon(req, res, PROXY_PUT, JSON.stringify(req.body));
};

/**
 * Delete - Delete a record
 */

exports.delete = function (req, res) {
    proxyCommon(req, res, PROXY_DELETE);
};

/**
 * Common part of our code.
 */
var proxyCommon = function (req, res, method, postData) {
   
    var remoteIP = req.headers['x-forwarded-for'] == undefined ? req.connection.remoteAddress : req.headers['x-forwarded-for'];
    console.log('Remote ip address: ' + remoteIP);

    var data;

    try {
        issueProxyRequest(req, res, method, postData);
        return;
    } catch (e) {
        console.log("Exception..." + e);
        data.status = "Possible server restart.";
        res.status(401);
    }

    res.json(data);

};

/**
 * Issue actual request on behalf of the client
 */
var issueProxyRequest = function (req, res, method, postData) {
    console.log( 'URL is: ' + req.query.url );
    var data = {};

    // Ignore invalid certs
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var targetUrl = req.query.url;
    console.log(targetUrl);
    // Headers. never cache.
    var headers = {
        'accept': '*/*',
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        'Expires': '-1',
        'Pragma': 'no-cache'
    };

    let keysToRemove = [ 'origin', 'host', 'referer', 'postman-token' ]
    for (var key in req.headers) {
        if ( keysToRemove.indexOf( key ) < 0 ) {
            headers[key] = req.headers[key];
        } else {
            console.log( 'I am removing this header: <' + key + '>' );
            continue;
        }
    }

    //. Useful for debugging 
    for (var header in headers) {
        console.log('I received this header from the browser: ' + header + ':' + headers[header]);
    }


    /*
    * Set our options object
    */
    var options = {
        uri: targetUrl,
        gzip: true,
        headers: headers,
        method: method

    };

    // IF Post/Put, add our body text...
    if (method === PROXY_POST || method === PROXY_PUT) {
        options.body = postData;
    }

    if (global.proxy) {
        //console.log( 'Using proxy: ' + global.proxy );
        options.proxy = global.proxy;   // Add proxy
    }

    let output = "";
    http(options, function (error, response, body) {
        for (var key in response.headers) {
            if (key.toLowerCase() === 'content-encoding') {
                res.setHeader('ezproxy', 'unzipped');
                // Already treated.... ignore...
                continue;
            }
            res.setHeader(key, response.headers[key]);
        }

        console.log('EZReactProxy: ' + options.uri + '  Method: ' + method.toUpperCase() + ' Response: ' + response.statusCode);
        res.status(response.statusCode);
        res.send(body);
        res.end();
    }
    );

    return;
}
