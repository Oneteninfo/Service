// var test1 = require ("./test.js");// 返回一个模块对象
// console.log(test1);
// console.log(test1.a);


//console.log(module);
// console.log(exports);
// console.log(__filename);
// console.log(__dirname);
// console.log(arguments);

//server
const net = require("net");
const server = net.createServer();
server.listen(12306, "127.0.0.1");
server.on("listening", function () {
    console.log("服务器已启动");
});
server.on("connection", function (socket) {
    console.log("有新的连接");
    socket.on("data", function (data) {
        console.log(data.toString());
        socket.write("hello browser");
    });
});