const http=require('http')
const os=require('os')

const server=http.createServer((req,res)=>{

if(req.url=="/os"){
res.end(os.platform())
}
else{
res.end("Hello NodeJS")
}

})

server.listen(3000,()=>{
console.log("Server running")
})