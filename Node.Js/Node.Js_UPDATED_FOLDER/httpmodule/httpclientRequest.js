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
