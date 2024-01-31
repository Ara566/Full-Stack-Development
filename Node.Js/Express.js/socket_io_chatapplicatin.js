/*

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile("E:/Full Stack Development/FSD/Express.js/chatapplication.htmll");
});

users = [];

io.on('connection',function(socket){
    console.log("User Connected");
    socket.on('setUsername',function(data){
        console.log(data);
        if(users.indexOf(data) > -1){
            socket.emit('userExists',data + 'username is taken already..try another');
        }
        else{
            users.push(data);
            socket.emit('userSet',{username:data});
            
        }
    });
    socket.on('msg',function(data){
        io.sockets.emit('newmsg',data);
    })
});

http.listen(3000,function(){
    console.log("Listening at port 3000");
});

*/