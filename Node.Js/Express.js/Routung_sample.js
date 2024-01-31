var express=require('express');

var router=express.Router()

router.get('/',function(req,res){
     res.send('home route with GET method....');
})

router.post('/',function(req,res){
    res.send("home route with POST method....")
})


//export

module.exports=router;