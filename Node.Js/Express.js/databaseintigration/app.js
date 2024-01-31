/*
var express=require('express');
var app=express();
var PORT=3000;


app.listen(PORT,(error)=>{
    if(!error)
        console.log("server is running..app listening on port: "+PORT);
    else
        console.log("error...");
}) */


//with mongodb .................................................................
/*

const express=require('express');
const mongoose=require('mongoose');

const app=express();
const port=3000;

mongoose.connect("mongodb://127.0.0.1:27017/admin")  //admin name of database
.then(()=>{  //callback fumctionality
    app.listen(port,()=>{
        console.log("database connection ready.. "+"server lisening at port: "+port)
    })
})
.catch((err)=>{
    console.log("error occured....."+err);
})

*/




























