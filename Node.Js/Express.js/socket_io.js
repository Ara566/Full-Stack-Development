/*

const app=require('express')(); //empty sunctionality
const http=require('http').Server(app);

app.get('/',function(req,res){
    res.sendfile('socket_io.html');  //path of html file
});

http.listen(3000,function(){
    console.log("listening at port :3000..")
})

//contains html file

*/

/*
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',function(request,response){
     response.sendFile("E:/Full Stack Development/FSD/Express.js/socket_io.html");
});

io.on('connection',function(socket){
     console.log("User Connected...");

     socket.on('disconnect',function(){
         console.log("User Disconnected..");
    });
});

http.listen(3000,function(){
     console.log("Server listening at port 3000");
});

*/




//Custom Event emit
//Server to client
/*
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',function(request,response){
    response.sendFile("E:/Full Stack Development/FSD/Express.js/socket_io.html");
});

io.on('connection',function(socket){
    console.log("User Connected...");

    setTimeout(function(){
        socket.emit('testerEvent',{description:"A Custom Event i.e. testerEvent created!!!"});
         },5000);

    socket.on('disconnect',function(){
        console.log("User Disconnected..");
    });
});

http.listen(3000,function(){
    console.log("Server listening at port 3000");
});

*/






//Custom Event emit
//client to Server


const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',function(request,response){
     response.sendFile("E:/Full Stack Development/FSD/Express.js/socket_io.html");
});

io.on('connection',function(socket){
    socket.on('clientEvent',function(data){
        console.log(data);
    });
});

http.listen(3000,function(){
    console.log("Server listening at port 3000");
});

