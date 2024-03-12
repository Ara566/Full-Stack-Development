let express=require('express')
let session=require('express-session')
let cookieparser=require('cookie-parser');


let app=express()
//middle ware
app.use(cookieparser())
app.use(session({
    secret:"aravind",
    resave:true,
    saveUninitialized:true
}))   
    //Configures the express-session middleware with a secret key, resave set to false (to prevent session data from being saved on every request), and saveUninitialized set to true (to save new, uninitialized sessions).)

app.get('/',(req,res)=>{
    if(req.session.views){
        req.session.views++;
    }
    else{
        req.session.views=1
    }
    res.send(`your visited page ${req.session.views} times`);
})

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})