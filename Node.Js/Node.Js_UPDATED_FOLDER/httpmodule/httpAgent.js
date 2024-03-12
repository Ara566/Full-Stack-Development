/*
APIs are used to integrate new applications with existing software systems.
This increases development speed because each functionality doesn't have to be written from scratch.
You can use APIs to leverage existing code.

new Agent({})----->
The new Agent({}) (Added in v0.3.4) method is an inbuilt application programming interface (API) of the ‘http’ module.
in which default globalAgent is used by http.request() which should create a custom http.Agent instance.

Syntax:

new Agent({options})    
//single object parameter--->keepAlive 
                        ---->maxSockets
                        ---->keepAliveMsecs



SOCKETS:
a socket is one endpoint of a two-way communication link between two programs running on the network.
 It can be viewed as a combination of an IP address and a port number. 
 Sockets are used to establish a connection between a client and a server, allowing them to exchange data.

When you make an HTTP request using Node.js, the Agent class is responsible for managing these sockets. 
--->It handles things like keeping the connections alive (keep-alive), 
--->limiting the number of sockets in the pool (maxSockets),
--->and controlling the frequency of TCP keep-alive packets (keepAliveMsecs). 
This helps optimize the use of network resources and improves the efficiency of HTTP requests in your application.

*/

let http=require('http');
let agent=new http.Agent();

let createConnection=agent.createConnection;
if(createConnection) console.log("connection successful...")


/*
npm install agentkeepalive

*/

let Agent=require('agentkeepalive');
let agentkeepalive=new Agent({})

let options={
    host: 'geeksforgeeks.org', 
    port: 80, 
    path: '/', 
    method: 'GET', 
}

let req=http.request(options,(res)=>{
    console.log(res.statusCode);
    console.log(options)
})

req.end();
console.log(agentkeepalive.maxFreeSockets);

















































