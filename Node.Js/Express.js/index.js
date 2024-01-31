/*

var express=require('express');

var app=express();

app.get('/',function(req,res){
    res.send("hiii how are you?..");
});

app.listen(3000);

*/

/*


const express = require('express');
const app = express();
const PORT = 3000;

app.post('/demo',(req, res) => {
		res.send("POST Request Called")
	})

app.listen(PORT,function (err) {
		if (err) console.log(err);
		console.log("Server listening on PORT", PORT);
	});


*/


const express=require('express');

var data=express();

data.all('/',(req, res) => {
    res.send("calling all method....")
})

data.listen(3000);
