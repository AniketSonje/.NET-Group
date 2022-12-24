var express = require("express");
var app=express();

app.get("/",function(req,res){

res.send("<h1>
Where the mind is without fear and the head is held high;
Where knowledge is free;
Where the world has not been broken up into fragments by narrow domestic walls;
Where words come out from the depth of truth;
Where tireless striving stretches its arms towards perfection;
Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit;
Where the mind is led forward by thee into ever-widening thought and action -
Into that heaven of freedom, my Father, let my country awake.
</h1>");

})

app.listen(3000,console.log("Server is listening on port 3000"));
