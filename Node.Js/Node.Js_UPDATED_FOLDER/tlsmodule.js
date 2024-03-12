//tls.createserver() method

/*
var tls = require('tls');
var fs = require('fs');

PORT = 5000,
HOST = '127.0.0.1';

var options={
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
};

var server = tls.createServer(options,function(socket)
{

    value = socket.setMaxSendFragment(16384);  //

    if(value)
        socket.write("TLS Fragment SET...");
    else
        socket.write("TLS Fragement Not SET");

    server.close(()=>{
    console.log("Server Close......");
    });
});

server.listen(PORT,HOST,function(){
    console.log("Server is listening at %s and port is %s",HOST,PORT);
});

var client = tls.connect(PORT,HOST,options,function(){

     console.log("Client Connection Success.....");   
}); 
    client.on("data",function(data){
        console.log("Received: %s", data.toString().replace(/(\n)/gm,""));

    client.end(()=>{
         console.log("Client CLosed....");
     });
  });

*/



// tls.rootcertificates() method
/*

var tls = require('tls'),
    fs = require('fs'),

    PORT = 5000,
    HOST = '127.0.0.1',
    value = null;

var options ={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
};


var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("Received: %s",data.toString().replace(/(\n)/gm,""));
     });

server.close(()=>{
    console.log("Server Closed....");
});

});


server.listen(PORT,HOST,function(){
    console.log("Server listening at %s, on port  %s ",HOST,PORT);
});

var client = tls.connect(PORT,HOST,options,function(){

    value = tls.rootCertificates;
    client.write("rootCertificates:" + value[0]);

    client.end(()=>{
        console.log("Client Closed......");
    });
});

*/


//tls.getCiphers() method


/*

var tls = require('tls'),
    fs = require('fs'),

    PORT = 5000,
    HOST = '127.0.0.1',
    value = null;

var options ={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
};

var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("Received:  %s",data.toString().replace(/(\n)/gm,""));
    });

server.close(()=>{
    console.log("Server Closed....");
});

});

server.listen(PORT,HOST,function(){
    console.log("Server listening at %s, on port  %s ",HOST,PORT);
});

var client = tls.connect(PORT,HOST,options,function(){

    value = tls.getCiphers();
    client.write("Ciphers:" + value[5]);

    client.end(()=>{
        console.log("Client Closed......");
    });
});



*/





//request.writableended




/*
var tls = require('tls'),
    fs = require('fs'),

    PORT = 5000,
    HOST = '127.0.0.1';

var options ={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false
};

var server = tls.createServer(options,function(socket){
    
    value = tls.getCiphers();
    socket.write("Ciphers: " + value[10]);

    server.close(()=>{
        console.log("Server Closed....");
});

});

server.listen(PORT,HOST,function(){
    console.log("Server listening at %s, on port  %s ",HOST,PORT);
});

var client = tls.connect(PORT,HOST,options,function(){

    console.log("Client is Ready...Connected..");
});
client.on("data",function(data){
    
    console.log("Received:  %s",data.toString().replace(/(\n)/gm,""));

    client.end(()=>{
        console.log("Client CLosed....");
    });
});

*/



//tlssocket.address() method

/*

var tls = require('tls');
var fs = require('fs');

PORT = 5000,
HOST = '127.0.0.1',
value = null;

var options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
};

var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("Received : %s",data.toString().replace(/(\n)/gm,""));
    });

    value = socket.address();
    console.log("Address:" + value.address);

    server.close();
});

server.on('close',()=>{
    console.log("Server Closed.....");
})

server.listen(PORT,HOST,function(){
    console.log("Listening at %s with %s",HOST,PORT );
});

var client = tls.connect(PORT,HOST,options,function(){
    const value = client.address();
    console.log("Bound Address:" + value.family)
    client.end();
});


*/




//tlssocket.authorised property



/*

var tls = require('tls');
var fs = require('fs');

PORT = 5000,
HOST = '127.0.0.1',
value = null;

var options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
};

var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("\n Received : %s",data.toString().replace(/(\n)/gm,""));
    });

    server.close(()=>{
        console.log("Server CLosed....");
    });
});

server.listen(PORT,HOST,function(){
    console.log("Listening at %s with %s",HOST,PORT );
});

var client  = tls.connect(PORT,HOST,options,function(){

    value = client.authorized;
    if(value)
        client.write("Certificate is Authorized...");
    else    
        client.write("Not Authorized....");

    client.end(()=>{
        console.log("Client CLosed.......");
    });
});
*/


//tlssocket.authorizationError


/*
var tls = require('tls');
var fs = require('fs');

PORT = 5000,
HOST = '127.0.0.1',
value = null;

var options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
};

var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("\n Received : %s",data.toString().replace(/(\n)/gm,""));
    });

    server.close(()=>{
        console.log("Server CLosed....");
    });
});

server.listen(PORT,HOST,function(){
    console.log("Listening at %s with %s",HOST,PORT );
});

var client  = tls.connect(PORT,HOST,options,function(){

    value = client.authorizationError;
    console.log("Reason: " + value);
    
    client.end(()=>{
        console.log("Client CLosed.......");
    });
});
*/




//tlssocket.disableRenegotiation

var tls = require('tls');
var fs = require('fs');

PORT = 5000,
HOST = '127.0.0.1',
value = null;

var options={
    key : fs.readFileSync('private-key.pem'),
    cert : fs.readFileSync('public-cert.pem'),
    rejectUnauthorized:false
};

var server = tls.createServer(options,function(socket){
    socket.on('data',function(data){
        console.log("\n Received : %s",data.toString().replace(/(\n)/gm,""));
    });

    server.close(()=>{
        console.log("Server CLosed....");
    });
});

server.listen(PORT,HOST,function(){
    console.log("Listening at %s with %s",HOST,PORT );
});

var client = tls.connect(PORT,HOST,options,function(){

    client.disableRenegotiation();
    client.write("TLS Renegotiation is disabled....");
 
    client.end(()=>{
    console.log("Client CLosed.......");
    });
});


// possible in socket.disableRenegotiation

