let http = require("http");
let server = http.createServer((req, res)=>{
    res.write("hi Lilaldhar");
    res.end();
})

server.listen(8448,()=>{
    console.log("server started");
})