
//serving static files

var express=require('express');

var app=express();
app.get("/",function(req,res){
    res.render('static_serving.pug')
});

app.use(express.static('public'));  //mandatory bcz its enables and 'public' is directory
app.listen(3000);