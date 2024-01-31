

var express=require('express');
var app=express()

//npm install --save cookie-parser
var cookieparser=require('cookie-parser')
//app.use(cookieparser())

app.get('/',function(req,res){
    res.cookie('name','express').send("cookie set");
});

app.listen(3000);


