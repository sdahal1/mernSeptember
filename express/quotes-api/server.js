const express = require("express");
const app = express();
const port = 8000;


// @GetMapping("/")
//public string hello(){
    //return something
// }

app.get("/api",(req,res)=>{
    res.json({status: "OK", msg:"Hello Express!" })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );