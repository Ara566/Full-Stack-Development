/*
Buffers are instances of the Buffer class in Node.js.
Buffers are designed to handle binary raw data. 
Buffers allocate raw memory.
its global class so it can be used without importing the Buffer module in an application.


Buffer Size: Buffers have a fixed size, which is specified when the buffer is created. 
You cannot resize a buffer; you need to create a new buffer with the desired size and copy the data.


*/
//ways to create buffer

let buf1=Buffer.alloc(10) // creates a buffer of size 10
console.log("lenth of buf1: ",buf1.length)

let buf2=Buffer.from('Hello How are YOU?')
console.log(buf2.toString())

let arraybuf=Buffer.from([10,20,30,40])
console.log(arraybuf.join(' '))


//Node.js Buffer.copy() Method

let buf3 = Buffer.from("hii how are you?");
let buf4=Buffer.from("aravind")
 
buf4.copy(buf3,4);
 
console.log(buf3.toString());
