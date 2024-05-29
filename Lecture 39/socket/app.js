const express = require('express');
const app = express();
//Getting http module
const http = require('http');
//creating a pure http server and passing express as request handler
const server = http.createServer(app);
const path = require('path');
const socketio = require('socket.io');
//passing http server in socketio
const io = socketio(server);

app.use('/', express.static(path.join(__dirname,'public')));

const users = {};

// whenever any client get connected this got fire up and estabish pipeline between them and message will flow in this
io.on('connection', (socket) => {
    console.log(`Someone got connected with the id - ${socket.id}`);

    //socket.emit() will fire-on socket.on()
    socket.on('send-msg', (data) => {//socket.on() will store the id of pipeline
        console.log(data);//will be printed on server side
        io.emit('received-msg', {
            msg: data.msg,
            id: users[socket.id]
        })
    });

    socket.on('login', (data) => {
        users[socket.id] = data.username;
    });
    
});





const port = 3000;
server.listen(port, ()=>{//not a express method, provided by node js http module
    console.log(`server started at port ${port}`);
})