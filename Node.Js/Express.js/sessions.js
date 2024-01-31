/*

var express  = require('express')
var cookieParser = require('cookie-parser');
var session  = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret:'confidential data'}));

app.get('/',function(request,response){
    if(request.session.page_views){
        request.session.page_views++;
        response.send("You have visited this Page: " + request.session.page_views + "times");
    }
    else{
        request.session.page_views = 1;
        response.send("Welcome ..First Time Visit..");
    }
});
app.listen(3000);

*/


