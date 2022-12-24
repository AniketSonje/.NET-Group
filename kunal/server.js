var express =require ("express");
var app =express();
app.get ("/",function(req,resp)
{
    resp.send("<h1>first drop in repository</h1>");
})
app.listen(3000);
console.log("listening to port 3000")