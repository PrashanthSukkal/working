// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:80
server.listen(80);
console.log("Server listening on port 80 :  http://127.0.0.1:80/");