/**
 * GET - Get HEALTH
 */
exports.get = function (req, res) {
    const os = require('os');

    var data = {}

    data.version = process.env.npm_package_version;

    function format(seconds) {
        
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }

        var hours = Math.floor(seconds / (60 * 60));
        var minutes = Math.floor(seconds % (60 * 60) / 60);
        var seconds = Math.floor(seconds % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }

    data.uptime = format( process.uptime() );
    data.osArch = os.arch();
    data.cpus = os.cpus();
    data.hostName = os.hostname();
    data.platform = os.platform();
    data.release = os.release();
    data.totalmemory = os.totalmem();
    data.osUptime = format( os.uptime() );

    res.json(data);

};
