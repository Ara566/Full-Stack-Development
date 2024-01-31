/*
//Middleware

const express  = require('express');
const app = express();

const port = process.env.port || 3000;

app.get("/",(request,response)=>{
    response.send(`<div>
    <h1> Welcome to FSD..</h1>
    <h3>Module: Middleware in ExpressJS </h3>
    </div>`);
});

*/

/*................................................................................
//modified app.get()

const express  = require('express');
const app = express();

const port = process.env.port || 3000;


app.get("/",(request,response,next)=>{
    console.log("Hello Talent Battle..");
    next();
},
(request,response)=>{
    response.send(`<div>
    <h1> Welcome to FSD..</h1>
    </div>`);
});

app.listen(port,()=>{
    console.log(`Listening at port number: ${port}`);
});

*/
/*
var express = require('express');
var app = express();

app.use("/",function(request,response,next){
    console.log("Request Received at :  " + Date.now());
    next();
});

app.get("/",function(request,response){
    response.send("Demo..mIddleware executing..");
});

app.listen(3000);
*/

/*

var express = require('express');
var app = express();

app.use(function(request,response,next){
    console.log("Start..");
    next();
});

//Route Haandler

app.get("/",function(request,response,next){
    response.send("Middle..");
    next();
});

app.use("/",function(request,response){
    console.log("End");
});

app.listen(3000);

*/