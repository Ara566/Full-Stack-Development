//broadcasting................................

/*
var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
//define root

app.get('/',function(req,res){
    res.sendFile("E:/Full Stack Development/FSD/Express.js/broadcasting.html")
});  //see broadcasting.html

//how many clients
var clients=0;

io.on('connection',function(socket)
{
    clients++;
    io.sockets.emit('broadcast',{description:clients+ "clients connected.."});

    socket.on('disconnect',function(){
        clients--;
        io.sockets.emit('broadcasr',{description:clients+"clients disconnected.."});
    });

});

http.listen(3000,()=>{
    console.log("server lisening at port 3000...")
})

*/



//..............................................................................

//updated broadcasting... its good

/*

var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
//define root

app.get('/',function(req,res){
    res.sendFile("E:/Full Stack Development/FSD/Express.js/broadcasting.html")
});  //see broadcasting.html

//how many clients
var clients=0;

io.on('connection',function(socket)
{
    clients++;
    socket.emit('newclientconnect',{description:"hello new user welcome"});
    socket.broadcast.emit('newclientconnect',{description:clients + " clients connected.."});

    socket.on('disconnect',function(){
        clients--;
        socket.broadcast.emit("newclientconnect",{description:clients + " clients connected.."});
    });
});

http.listen(3000,()=>{
    console.log("server lisening at port 3000...")
})

*/


//.....................................................................................

//room joining
var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
//define root

app.get('/',function(req,res){
    res.sendFile("E:/Full Stack Development/FSD/Express.js/broadcasting.html")
});  //see broadcasting.html

var roomnumber = 1;

io.on('connection',function(socket){
     socket.join("room-" + roomnumber);

     io.sockets.in("room-"+roomnumber).emit("connecttoroom","You are connected to room:"+roomnumber);

});

http.listen(3000,()=>{
    console.log("server lisening at port 3000...")
})