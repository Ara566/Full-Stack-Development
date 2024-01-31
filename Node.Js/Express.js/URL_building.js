/*

var express=require('express');

var data=express();

data.get('/:id/:name',function(req,res){
    res.send("id is :"+req.params.id+'and name is:'+req.params.name);
});

data.listen(3000);


*/




// pattern matched routing 

/*

var express=require('express');
var data=express();
data.get('/:id([0-9]{5})',function(req,res){
    res.send("id takes exact len 5: "+req.params.id);
})

data.listen(3000);

*/



