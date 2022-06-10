const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     fs.readFile(path.join(__dirname, 'public', './index.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(data);
    //     }
    //     );
    // }
    // if (req.url === "/about") {
    //     fs.readFile(path.join(__dirname, 'public', './about.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(data);
    //     }
    //     );
    // }
    // if (req.url === "/app/users") {
    //     const users = [
    //         { name: 'Bob' },
    //         { name: 'John' },
    //         { name: 'Sarah' }

    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));

    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    };
    if (contentType == "text/html" && extname == "") filePath += ".html";
    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf8');
                })
            }
            else {
                // Server Error
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + err.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content)
        }
    })
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, (err, res) => {
    if (err) {
        throw err;
    }
    console.log(`Server is listening on port ${PORT}`);
})