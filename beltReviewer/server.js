const express = require("express"); //import express--> which allows us to build a REST api
const cors = require("cors") //cross-origin-resource-sharing ---> this allows the express application to give permission to react application to share data back and forth
const app = express(); //create a variable "app" which is an instance of express. 
const port = 8000;


app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors()); //tells the app that it is allowed to share resources with a react application





require("./server/config/config"); //so that we can connect to mongoose--> all mongoose connections instructions are in the config file


//require the routes
require("./server/routes/ninja.routes")(app)




//app.listen needs to be at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) );