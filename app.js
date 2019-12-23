const http = require('http');
const fs = require('fs');
require('dotenv').config({path: __dirname + '/.env'});

const hostname = process.env['URL'];
const port = 3000;

console.log(hostname);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});