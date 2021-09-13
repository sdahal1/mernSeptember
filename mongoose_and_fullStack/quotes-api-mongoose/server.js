const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information


require("./server/config/quotes.config");


require("./server/routes/quote.routes")(app)









app.listen( port, () => console.log(`Listening on port: ${port}`) );