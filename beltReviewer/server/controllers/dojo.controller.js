const Dojo = require("../models/dojo.model");



module.exports.findAllDojos = (req,res)=>{
    Dojo.find()
        .then(allDojos=>{
            res.json({results: allDojos})
            
        })
        .catch(err=>{
            res.json({err:err})
        })
    
}

module.exports.createNewDojo = (req,res)=>{
    Dojo.create(req.body)
        .then(newDojoObj=>{
            res.json({results: newDojoObj})
        })
        .catch(err=>{
            res.json({err:err})
        })

    
}

module.exports.findOneDojo = (req,res)=>{
    
    Dojo.findOne({_id:req.params.id})
        .then(foundDojo=>{
            res.json({results: foundDojo })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingDojo = (req, res) => {
    Dojo.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedDojo => {
            res.json({ results: updatedDojo })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteDojo = (req,res)=>{
    Dojo.deleteOne({_id: req.params.id})
        .then(deletedDojo =>{
            res.json({results: deletedDojo})
        })
        .catch(err=>{
            res.json({err:err})
        })
}



