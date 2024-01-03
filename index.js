const http = require("http");
const fs = require("fs");
const PORT=process.env.PORT; 

const handleReadFile = (__fileName, statusCode,req,res)=>  fs.readFile(__fileName,"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        res.writeHead(200,{'Content-type':'text/html'} )
        res.write(data);
        res.end();
    }
});


 const server=http. createServer((req,res)=>{
 if(req.url =="/"){
   handleReadFile("index.html",200,req,res)
 } else if(req.url =="/aboute"){
    handleReadFile("aboute.html",200,req,res)
}else if(req.url =="/contack"){
    handleReadFile("contack.html",200,req,res)
}else{
    handleReadFile("404.html",404,req,res)
}
});
server.listen(PORT,()=>{
    console.log('server is running')
})