const Ninja = require("../models/ninja.model");



module.exports.findAllNinjas = (req,res)=>{
    Ninja.find()
        .populate("dojo_id")
        .then(allNinjas=>{
            res.json({results: allNinjas})
            
        })
        .catch(err=>{
            res.json({err:err})
        })
    
}

module.exports.createNewNinja = (req,res)=>{
    const name = req.body.name;
    const numProjects= req.body.numProjects;
    const graduationDate = req.body.graduationDate;
    const isVeteran = req.body.isVeteran;
    const profilePicUrl = req.body.profilePicUrl;
    const dojo_id = req.body.dojo_id


    let photo=null;
    if(req.file){
        console.log("you uploaded a file!!!")
        photo = req.file.filename;
    }else{
        console.log("NO FILE DETECTED")
    }

    const newNinjaData = {
            name,
            numProjects,
            graduationDate,
            isVeteran,
            profilePicUrl,
            // dojo_id,
            photo: photo
        }
    // console.log("new ninja data", newNinjaData)

    Ninja.create(newNinjaData)
        .then(newNinjaObj=>{
            res.json({results: newNinjaObj})
        })
        .catch(err=>{
            res.json({err:err})
        })

    
}

module.exports.findOneNinja = (req,res)=>{
    
    Ninja.findOne({_id:req.params.id})
        .then(foundNinja=>{
            res.json({results: foundNinja })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingNinja = (req, res) => {
    Ninja.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedNinja => {
            res.json({ results: updatedNinja })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id})
        .then(deletedNinja =>{
            res.json({results: deletedNinja})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.findNinjasBelongingToDojo = (req,res)=>{
    Ninja.find({dojo_id: req.params.dojoId})
        .populate("dojo_id")
        .then(allNinjas=>{
            res.json({results: allNinjas})
            
        })
        .catch(err=>{
            res.json({err:err})
        })
    
}



