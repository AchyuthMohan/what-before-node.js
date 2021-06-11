var http=require("http")
var fs=require("fs")
var url=require("url")
http.createServer(function(req,res){
   var q=url.parse(req.url,true)
   console.log(q.pathname)


    if(q.pathname==="/"){
        fs.readFile("hello.html",function(err,hai){
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(hai)
            res.end()
        })
    }else if(q.pathname==="/signup"){
        fs.readFile("signup.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(data)
            res.end()
        })
        
    }else if(q.pathname==="/signupaction"){
        console.log(q.query.password)
        console.log(q.query.email)
        res.write("<h1>"+q.query.email+"</h1>")
        
        res.write("action")
        res.end()
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.write("error")
        res.end()
    }
}).listen(7000,console.log("server started"))