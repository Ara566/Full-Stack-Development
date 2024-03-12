/*
npm install assert
Assert module in Node.js provides a bunch of facilities that are useful for the assertion of the function.
The assert module provides a set of assertion functions for verifying invariants.
If the condition is true it will output nothing else an assertion error is given by the console.


1)The assert.equal() function tests for equality between the actual and the expected parameters. 
If the condition is true it will not produce an output else an assertion error is raised.

Syntax:

assert.equal(actual, expected[, message])



2)
Node.js assert.match() Function
The assert.match() function expects the string input to match the regular expression.
If the condition is true it will not produce an output else an assertion error is raised. 

Syntax:
assert.match(string, regexp[, message])

let assert1=require('assert').strict;
let a=10;
let b='10';

try{
    assert1.equal(a,b);
    console.log("no error")
}
catch(error){
    console.log("the erroe is: ",error)
}

*/



let mystr='I want to become a good software developer'
let assert2=require('assert').strict;

//if(mystr.includes('become')) console.log("string exit")
//else console.log("string does not exit")

try{
    assert2.match(mystr,/become/);
    console.log("matched")
}
catch(error){
    console.log(error)
}
