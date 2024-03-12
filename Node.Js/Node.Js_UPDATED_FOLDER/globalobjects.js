/*const buffer=new Buffer.alloc(5,'abcde');
console.log(buffer);*/

/*

function print(){
    console.log("A");
}
function print1(){
    console.log("R");
}
function print2(){
    console.log("V");
}
function print3(){
    console.log("I");
}
function print4(){
    console.log("N");
}
function print5(){
    console.log("D");
}
var timeout=setTimeout(print,1000);
var timeout=setTimeout(print1,2000);
var timeout=setTimeout(print,3000);
var timeout=setTimeout(print3,4000);
var timeout=setTimeout(print4,5000);
var timeout=setTimeout(print5,6000); */
/*
const encoder=new TextEncoder();
const e=encoder.encode("abcdefg   ABCDEFG");
console.log(e);

const decoder=new TextDecoder();
const d=decoder.decode(e);
console.log(d);
*/
const welcome={                    //object creation
    sayhello:function(){
        console.log('hii welcome to our company');
    },
    currdate : new Date().toDateString(),
    companyname: 'TCS'  //another 2 variables

};

module.exports=welcome  //avaliable globally