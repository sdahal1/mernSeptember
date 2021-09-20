const NinjaController = require("../controllers/ninja.controller");


module.exports = app => {
    app.get("/api/ninjas", NinjaController.findAllNinjas);
    app.post("/api/ninjas", NinjaController.createNewNinja);
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);
    app.put("/api/ninjas/:id", NinjaController.updateExistingNinja);
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja);
   
}

//a variable in a route is called a route parameter. the ":" makes something a variable in the route and the "id" is a route parameter