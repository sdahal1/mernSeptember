const DojoController = require("../controllers/dojo.controller");




module.exports = app => {
    app.get("/api/dojos", DojoController.findAllDojos);
    app.post("/api/dojos", DojoController.createNewDojo);
    app.get("/api/dojos/:id", DojoController.findOneDojo);
    app.put("/api/dojos/:id", DojoController.updateExistingDojo);
    app.delete("/api/dojos/:id", DojoController.deleteDojo);

    
 
}
