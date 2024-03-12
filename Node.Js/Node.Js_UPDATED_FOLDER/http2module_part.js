// http2 module

/*
const http2 = require('http2');
const fs = require('fs');
// Private key and public certificate for access
const options = {
key: fs.readFileSync('private-key.pem'),  //pem privacy enhanced mail
cert: fs.readFileSync('public-cert.pem'),
};
// Creating and initializing server by using http2.createServer() method
const server = http2.createServer(options);
server.on('stream', (stream, requestHeaders) =>
{
// Getting session object by using session method & alpnProtocol by alpnProtocolmethod
const http2session = stream.session;
const alpnProtocol = http2session.alpnProtocol;
stream.end("session protocol : " + alpnProtocol);
http2session.close();
// Handling 'close' event
http2session.on('close', () => {
    console.log("session is closed");
})
// Stopping the server by using the close() method
server.close(() => {
    console.log("server destroyed");
})
});
server.listen(8000);
// Creating and initializing client
const client = http2.connect('http://localhost:8000');

const req = client.request({
':method': 'GET', ':path': '/' },);

req.on('data', (data) => {
console.log('Received: %s ',
data.toString().replace(/(\n)/gm,""));
});

req.on('end', () => {
client.close(() => {
    console.log("client destroyed");
})
});

*/

//http2session.socket method


/*

const http2=require('http');
const fs=require('fs');

const options={
    key:fs.readFileSync('private-key.pem'),
    cert:fs.readFileSync('public-cert.pem')
}

const server=http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'Content-Type':'text/plain'
    });

    stream.write("heloo.....");

    const http2session=stream.session;
    //apply socket method
    const status=http2session.socket;
    //after receiving status work on other paramenters family,addres,status
    stream.end("details about address of family socket:"+status.address().family);

    server.close(()=>{
        console.log("server closed.....");
    })
});

server.listen(8000);

//client

const client=http2.connect('http://localhost:8000');

const req=client.request({
    ':method':'GET','path':'/'
});

req.on('response',(responseHeaders)=>{
    console.log('status :'+responseHeaders[':status']);
});

req.on('data',(data)=>{
    console.log("Recieved : %s"+data.tostring().replace(/(\n)/gm, ""));
});

req.on('end',(end)=>{
    client.close(()=>{
        console.log("client closed....");
    })
})

*/


//http2session.remoteSettings method


/*

const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
     });
    stream.write("Hello...");
    const http2session = stream.session;

    const status = http2session.remoteSettings;
 
    //stream.end("Header Table Size:" + status.headerTableSize);
    stream.end("Frame Size:"+status.maxFrameSize);
    server.close(()=>{
        console.log("Server Local...Close");
 })

});

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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

*/



//http2session.destroyed


/*

const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");


    const http2session = stream.session;

    stream.end("Session Protocol:"+ http2session.alpnProtocol);

    http2session.on("close",()=>{
        const status = http2session.destroyed;
        if(status)
            console.log("Session Destroyed Successfully..!!!!");
        else
            console.log("Failure...");
        })

    server.close(()=>{
        console.log("Server Local...Close");
        http2session.destroy();
     })

});

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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


*/


//http2session.type method

/* 

const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");


    const http2session = stream.session;

    const status = http2session.type;

    if(status)
        stream.end("This session is all about:" + "HTTP2_SESSION_CLIENT type");
    else
        stream.end("Session Type:" + "HTTP2_SESSION_SERVER type");
    server.close(()=>{
    console.log("Server Local...Close");
})

});

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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

*/


//http2session.encrypted methos

/*
const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");


    const http2session = stream.session;

    const status = http2session.encrypted;

    if(status)
        stream.end('with tls socket');
    else
        stream.end("other socket");
    server.close(()=>{
    console.log("Server Local...Close");
})

});

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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

*/

//http2session.localSettings method

/*

const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");


    const http2session = stream.session;
    const status = http2session.localSettings;
    //stream.end("Max Header Size:"+ status.maxHeaderListSize);
    stream.end("Header Table Size:" + status.headerTableSize);
    server.close(()=>{
    console.log("Server Local...Close");
})

});

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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

*/



//http2session.ping() method

const http2 = require('http2');
const fs = require("fs");

const options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
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

server.listen(8000);

const client = http2.connect('http://localhost:8000');

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


//os module

var os = require('os');

console.log("Free System Memory:" + os.freemem());
console.log("Architecture Info:" + os.arch());
console.log("System Memory:" + os.totalmem());
console.log("List of Netwrok Interfaces:" + os.networkInterfaces());
console.log("Default Directory:" + os.tmpdir());
console.log("Home Directory:" + os.homedir());
console.log("Endianness of System " + os.endianness());
console.log("Hostname:" + os.hostname());
console.log("Type of OS:" + os.type());
console.log("OS Platform:" + os.platform());
console.log("OS Release:" + os.release());
