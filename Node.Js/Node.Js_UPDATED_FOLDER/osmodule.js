/*

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


*/


//const os = require('os');

// EOL method end of line
//console.log(JSON.stringify(os.EOL));

//arch method
//console.log(os.arch());


//cpus 
//console.log(os.cpus());


//endianness method
//console.log(os.endianness());

//freemem
//console.log(os.freemem());



//getpriority() method
/*
const os = require("os");

try{
    console.log(os.getPriority(1));

} catch(err){
    console.log("Error....");
}

*/

/*
const os = require('os');

//console.log(os.homedir());

*/

//hostname
const os = require('os');

    console.log(os.hostname());

if(os.hostname()){
     var hostname = os.hostname();
     console.log("Hostname:" + String(hostname));
}


//version

const os = require('os');

let version = os.version();
console.log("OS Version = ", version);


