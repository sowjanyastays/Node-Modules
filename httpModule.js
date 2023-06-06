const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, world!');
  res.end();
});

const port = 3500;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

console.log('Server address:', server.address());
console.log('Server timeout:', server.timeout);

server.on('request', (req, res) => {
  console.log('Request received');
});

server.on('connection', (socket) => {
  console.log('Connection established');
});

server.on('close', () => {
  console.log('Server closed');
});