//Building a NodeJS HTTP/2 Server and Secure it with Let’s Encrypt
/*
 STEP 1)Create a Node.js project: Create a directory for your project and initialize a new Node.js project using npm.
    mkdir http2-server
    cd http2-server
    npm init -y

STEP 2)Install necessary packages: 
    You'll need the http2 module for creating the HTTP/2 server
    acme-client for handling Let's Encrypt certificate requests.

    npm install http2 acme-client


**********for generate certificate openssl........so install openssl
**********its provide   PRIVATE-KEY & CERTIFICATE

// openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-private.pem -out localhost-cert.pem
//or
/*
openssl genrsa -out private.key 2048
openssl req -new -key private.key -out csr.pem
*/

let http2=require('http2')
let fs=require('fs');
const { Stream } = require('stream');
const { type } = require('os');

// openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-private.pem -out localhost-cert.pem
let server=http2.createSecureServer({
    "key":fs.readFileSync('localhost-private.pem'),
    "cert":fs.readFileSync('localhost-cert.pem')
})

//sending many req witch will be in stream
server.on("stream",(stream,headers)=>{
    console.log(stream.id)
    stream.respond({
        "content-type":"application/json",
        "status":200,
    })

    stream.end(JSON.stringify({
        "user":"aravind",
        "id":520,
    }))
})


server.listen(8443,()=>{
    console.log("server listening on port 8443")
})