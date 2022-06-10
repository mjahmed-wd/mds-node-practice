const http = require('http');

// create server instance
const server = http.createServer((req, res) => {
    res.end('Hello World!');
}
);

server.listen(3000, (err, res) => {
    if (err) {
        throw err;
    }
    console.log('Server is listening on port 3000');
})