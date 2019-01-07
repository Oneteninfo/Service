const net = require('net');
const fs = require('fs');
var serverConf = require('./conf');

var server = net.createServer();
server.listen(serverConf.port, serverConf.ipAddr);

server.on('listening', function () {
    console.log("服务器已启动");
});

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        let url = data.toString().split('\r\n')[0].split(' ')[1];
        try {
            var data = fs.readFileSync(__dirname + serverConf.path + url);
            socket.write("HTTP/1.1 200 OK\r\n\r\n");
            socket.write(data);
        } catch (e) {
            socket.write("HTTP/1.1 404 NOT FOUND\r\n\r\n");
            socket.write("<html><body><h1>404 NOT FOUND</h1></body></html>");
        }
        socket.end();
    });
});