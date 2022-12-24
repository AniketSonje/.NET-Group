var express=require("express");
var app=express();

app.get("/",function(req,res){

    res.send("<h1>Carnival Of Rust</h1>");  
})

app.listen(3000);
console.log("Server is listening at port 3000");