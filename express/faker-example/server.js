const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');



class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
    }
}


app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})






app.listen( port, () => console.log(`Listening on port: ${port}`) );