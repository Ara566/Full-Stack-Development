/*
var http=require('http');
http.createServer(function(res,req){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.end("hello world");
}).listen(3000);

*/


//local module

var local=require('./globalobjects') //filemodule

local.sayhello();

console.log(local.currdate);
console.log(local.companyname); 

let company = {
    Name: "GeeksforGeeks",
    Address: "Noida",
    Contact: "+919876543210",
    Email: "abc@geeksforgeeks.org",
};
 
// Display the object information
console.log("Name:", company.Name);
 
// Display the type of variable
console.log("Type of variable company:", typeof company);





/*
let http=require('http');
let port=3000;

let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("writhead ended....")
})

server.listen(port,()=>{
    console.log("serevr is listening at port number:",port)
})
*/
