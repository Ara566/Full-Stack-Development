//http module
/*...............................

var http=require('http');
http.createServer((req,res)=>{
    res.write('hii welcome Aravind');
    res.end();
}).listen(3000,()=>{
    console.log("server started....");
});

..................................*/

// Node.js program to demonstrate the 
// new agent({}) method 

/*.......................................
const http = require('http'); 
var agent = new http.Agent({}); 

// Creating new agent 
const aliveAgent = new http.Agent({ keepAlive: true,maxSockets: 0, maxSockets: 5, }); 
// Creating new agent 
var agent = new http.Agent({}); 

// Creating new connection 
var createConnection = aliveAgent.createConnection; 

// Creating new connection 
var createConnection = agent.createConnection; 
console.log('Connection successfully created...'); 

// Printing the connection 
console.log(createConnection); 
console.log('Connection successfully created...'); 

// Printing the connection 
console.log('Connection: ', createConnection); 
*/

/*
var http =require('http');
http.createServer((request,response)=>{ }).listen(5000,'127.0.0.1',()=>{
const request = http.request({
    port:5000,
    host:'127.0.0.1',
});
    
    if(request.connection){
        console.log("Request for Connection..");
    }
    else{
        console.log("Not Requested....");
    }
    process.exit(0);
    });
    
*/

      //client request Aborted.....

const http = require('http');
const server = http.createServer((request,response)=>
{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Done...");
});

server.listen(5000,'127.0.0.1',()=>
{
    console.log("Server Initiated and Started!!!!");

    const options =
    {
        port:5000,
        host:"127.0.0.1",
        headers:{'Connection':'Upgrade',
                 'Upgrade':'websocket'
                }
    };

const request = http.request(options);


//process.exit(0) or 
request.abort();
request.on("abort",()=>{
console.log("Client Req is Aborted!!!");
process.exit(0);
})
});
























