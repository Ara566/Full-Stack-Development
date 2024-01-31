
var express=require('express');
var app=express();

var sample=require('./Routung_sample.js');

//use before listening

app.use('/Routung_sample',sample);


//listen

app.listen(3000);


