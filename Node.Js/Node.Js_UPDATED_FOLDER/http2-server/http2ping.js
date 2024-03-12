
const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('localhost-private.pem'),
    cert : fs.readFileSync('localhost-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");


    const http2session = stream.session;

    const status = http2session.ping;

    if(status)
        stream.end('ping is send');
    else
        stream.end("ping is not send");
    server.close(()=>{
    console.log("Server Local...Close");
})

});

server.listen(8443);

const client = http2.connect('http://localhost:8443');

const req = client.request({
     ':method':'GET',':path':'/'
});

req.on('response',(responseHeaders)=>{
     console.log("Status: "+ +responseHeaders[":status"]);
});

req.on('data',(data)=>{
     console.log("Received: %s",data.toString().replace(/(\n)/gm, " "));
});

req.on("end",()=>{
     client.close(()=>{
    console.log("Client Closed...");
    })
});
