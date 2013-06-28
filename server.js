var http = require('http');
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is the test2 repo on '+port+'\n');
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+port+'/');
