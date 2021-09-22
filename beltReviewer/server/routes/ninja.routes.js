const NinjaController = require("../controllers/ninja.controller");
const multer = require("multer");
const {v4: uuidv4} = require("uuid");
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


module.exports = app => {
    app.get("/api/ninjas", NinjaController.findAllNinjas);
    app.post("/api/ninjas",upload.single('photo'), NinjaController.createNewNinja);
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);
    app.put("/api/ninjas/:id", NinjaController.updateExistingNinja);
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja);
    

    //show all the ninjas that belong to a dojo given a dojo id
    app.get("/api/ninjas/dojo/:dojoId", NinjaController.findNinjasBelongingToDojo )
}

//a variable in a route is called a route parameter. the ":" makes something a variable in the route and the "id" is a route parameter