//npm init
//npm install express body-parser mongoose nodemon
var express=require('express')
var bodyparser=require('body-parser')
var mongoose=require('mongoose')
const app=express()

app.get('/',function(req,res){
    res.set({
        'Allow-access-Allow-Origin': '*'
    })
    return res.redirect('contact.html')
})


//now dependency middlewares to express app 

app.use(bodyparser.json())
app.use(express.static('public'))  //find static html files in public directory
app.use(bodyparser.urlencoded({extended:true}))


//connecting to db
mongoose.connect("mongodb://127.0.0.1:27017/contactdb")
var db=mongoose.connection;
db.on('error',()=>{console.log("error occured in db connection")})
db.once('open',()=>{console.log("no error conncetion successful...")})



//lisen for another route from html
app.post('/contact',(req,res)=>{
    //extract the data that we receive
    var name=req.body.name;
    var email=req.body.email;
    var phno=req.body.phno;
    var password=req.body.password;

    //store all these in single object to pass to the mongodb database
    var data={
        "name":name,
        "email":email,
        "phno":phno,
        "password":password
        }


    //here 'users' is the collection in 'contactdb' db
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err
        }
        else{
            console.log("record inserted successfully...")
        }
    })

    //when record is inserted suss ,then redirect to the new html page

    return res.redirect('contact_shared_successfully.html')

})






app.listen(3000,function(){
    console.log("server lisening at port 3000.....");
})