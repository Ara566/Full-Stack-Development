//mandatorly need to install --save body-parser multer
//install and import it

var express=require('express');
var app=express();

var bodyparser=require('body-parser');
var multer=require('multer');
var upload=multer(); //upload functionality witch is acts as instance of multer

app.get('/',function(req,res){
    res.render('form.pug');       //rendering view
});

/*
 //above .pug or 
app.set('view engine','pug');
//where we collect all this views
app.set('views','views'); */


//parsing json and url encodded data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//use instance multer
app.use(upload.array());
//under
app.use(express.static('public'))

app.post('/',function(req,res){
    console.log(req.body); // parsed request body and whatever data recieved all contnets printed
    res.send('data received,responds is send to the your mail...')
})

app.listen(3000);

