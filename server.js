const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from GitHub Actions -> ECS! v1\n');
}).listen(PORT, () => console.log('listening on ' + PORT));
