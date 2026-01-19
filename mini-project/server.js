const http = require('http')
const user=[
    {
        name :"Kaushal Kumar Prajapati",
        age:20,
        mail:"kkp040305@gmail.com"
    },
    {
        name :"Anshika ",
        age:19,
        mail:"anshika08062006@gmail.com"
    },
    {
        name :"Kritika Mishra",
        age:20,
        mail:"mishrakritika@gmail.com"
    }
]
const server = http.createServer((req,res)=>{
    
    res.setHeader("Content-type","text/html")
    // console.log(req.method);
    if(req.url === '/' && req.method==="GET"){
        res.write("Server is running")
    }
    else if(req.url === "/about" && req.method === "GET"){
        res.write("This is an about page")
    }
    // step2
    else if(req.url === "/user" && req.method === "GET"){
        res.writeHead(200,{"Content-type":"application/JSON"});
        res.write(JSON.stringify(user))
        res.end("server is running")
    }
    else{
        res.end("404 error")
    }
    res.end();
})
server.listen(3000,()=>{
    console.log("server is running")
})
// step 2