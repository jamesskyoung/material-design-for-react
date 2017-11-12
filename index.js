const http = require( 'http');
const path = require('path');
const serverPort = 8080;
const port = process.env.PORT || serverPort;

const requestHandler = (request, response) => {
    console.log(request.url)
    response.send(path.join(__dirname, '/public/index.html'));
    response.end();
}

const server = http.createServer(requestHandler)


server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
  })