//web based node.js application
//import required modules
var http=require('http');
//create server
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("hello world");
}).listen(5000);        //200 status code,its mean okay