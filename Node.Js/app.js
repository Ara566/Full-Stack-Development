/*
var http=require('http');
http.createServer(function(res,req){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.end("hello world");
}).listen(3000);

*/
//local module

var local=require('./globalobjects.js') //filemodule

local.sayhello();

console.log(local.currdate);
console.log(local.companyname);
