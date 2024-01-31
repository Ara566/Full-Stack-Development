//ExpressJS - Templating

//once see views file and first_view.pug for better understanding....

/*
var express = require('express');
var app = express();

app.set('view engine','pug');    //mandatory
app.set('views','./views');

app.get('/',function(request,response){
     response.render('first_view');   //rendering view
});

app.listen(3000) */


/*
 //see demo_view.pug

var express = require('express');
var app = express();

app.get('/',function(request,response){
     response.render('demo_view.pug',{    //res.render(param1,param2)
                                          //1st path,2nd what kind of to pass
        name:"google",
        url:"http://google.in"
     });
});

app.listen(3000,()=>{
    console.log("listening.......");
})

*/



//conditional stmt

/*

var express=require('express');
var data=express();

data.get('/',function(req,res){
    res.render('conditional_stmt.pug',
    {
        user:{name:'Aravind',age:'30'},
        url:"http://google.in"
    })
})

data.listen(3000); */


/*

//include and components


var express=require('express');
var data=express();

data.get('/',function(req,res){
    res.render('include_content.pug')    //contain 3 pug files
})

data.listen(3000);
*/










































