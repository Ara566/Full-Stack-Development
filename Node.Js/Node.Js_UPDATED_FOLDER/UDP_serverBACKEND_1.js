

const UDP = require('dgram')
const server = UDP.createSocket('udp4')
const port = 3000
server.on('Listening....',()=>{
    const address = server.address()
    console.log("Server Listening to..","Address", address.address,"Port:",address.port)
})

server.on('message',(message,info)=>{
    console.log("Message: ",message.toString())

    const response = Buffer.from("Message Received...")

    server.send(response,info.port,info.address,(err)=>{

    if(err){
        console.error("Failed..to send Response...")
     }
    else{
        console.log("Success from Server .....Responded successfully!!!")
     }
    })
})

server.bind(port)