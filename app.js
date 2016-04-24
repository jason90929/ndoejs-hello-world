/*
 * 以npm建置的環境，並使用node啟動此app
 * node app 或是 node app.js 來執行
 */

/*
 * express啟動伺服器
 */
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Express!');
});

app.listen(3000, function() {
    console.log("example app listening on port 3000!");
});

/*
 * http啟動伺服器
 */
// var http = require("http");
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello HTTP\n");
// });
//
// server.listen(3000);
//
// console.log("Server running at http://127.0.0.1:3000/");


/*
 * TCP啟動伺服器
 */
// var net = require("net");
//
// var server = net.createServer(function(socket) {
//     console.log("Connection from " + socket.remoteAddress);
//     socket.end("Hello TCP");
// });
//
// server.listen(3000, "localhost");
//
// console.log("TCP server listening on port 3000 at localhost.");