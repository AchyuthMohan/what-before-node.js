const express=require("express")
const app=express()
var bodyParser = require('body-parser')


app.use(function(req,res,next){ //displays when server is called or request come.This is called as middleware function
    console.log("start")
    next()
})

const path=require("path")


app.get("/signup",function(req,res,next){
    res.sendFile(path.join(__dirname,"signup.html"))
    console.log("middle")
    next()
})
app.use(function(req,res){
    console.log("end")
})
app.get("/signupaction",(req,res)=>{
    console.log(req.body.email)
})
app.post('/signupaction', function(req, res) {
    console.log(req.body.email);
  });
 app.get("/about",(req,res)=>res.send("About"))
 app.post("/signup",(req,res)=>{
     res.send("account created")
     console.log(req.body.email)
 })
 app.post('/signupaction', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
 });

app.listen(5000,function(){
    console.log(__filename)
    console.log("server started")
})