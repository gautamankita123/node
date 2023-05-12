// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     console.log(req.url);
//     if (url === '/') {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     console.log("working2");
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         console.log("working");
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, err => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             });
//         });
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
//     res.end();
// });
// server.listen(3000, () => {
//     console.log('3000');
// });

const http = require('http');
const routes = require('./routes');
console.log(routes.someText);
const server = http.createServer(routes.handler);


server.listen(3000);