const express = require('express');
const app = express()
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const prot = 5000

app.use(express.static(path.join(__dirname)))

const userSocketsArr = []

const permissionData = []

http.listen(5000, () => {
    console.log(`服务器端口: ${prot} 启动成功`);
});

io.on('connection', socket => {
    userSocketsArr.push(socket)
    console.log('Socket.IO 连接已建立', socket.id);
    io.sockets.emit('broadcast', '用户进入直播间')

    const permissionDataItem = Math.floor(Math.random() * 99999999)
    socket.emit('permissionData', permissionDataItem)

    socket.on('message', function (data) {
        console.log('接收到消息：', data);
    });

    socket.on('getData', ({ id, nick }) => {
        console.log(id, nick);
        socket.emit('hint', '返回端数据')
    })

    socket.on('disconnect', function () {
        console.log('Socket.IO 连接已关闭');
    });
});

