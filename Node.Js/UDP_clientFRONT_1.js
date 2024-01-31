
const { info } = require('console');
const udp=require('dgram');
//client
const client=udp.createSocket('udp4');

const port=3000
const hostname='localhost'

// info server address and retrive 

client.on('message',(message,info)=>{
    console.log('address :',info.address, 'port:',info.port,'size:',info.size);
    //read message from server
    console.log("message from server:",message.toString())
})


//sending packet
const packet=Buffer.from("Message from client welcome..");

client.send(packet,port,hostname,(err)=>{
    if(err){
        console.error("failed..");
    }
    else{
        console.log("successs...");
    }
})