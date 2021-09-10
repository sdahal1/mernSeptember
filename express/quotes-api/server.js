const express = require("express");
const app = express();
const port = 8000;


// @GetMapping("/")
//public string hello(){
    //return something
// }

app.get("/api/",()=>{
    return {status:"OK", msg: "Hello World" }
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );