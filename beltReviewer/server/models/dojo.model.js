const mongoose = require('mongoose'); //mongoose an interface to mongodb, meaning that we can use mongoose to allow us to do crud commands and other db commands without doing the mongodb commands and instead we can use javascript-> ORM = object relational mapper
 

const DojoSchema = new mongoose.Schema({ //instructions to create a table in my db--> also called collection
    name: {
        type: String,
        required:[true, "Dojo Name is required!"]
    },
    location: {
        type: String,
        required:[true, "Dojo Location is required!"],
        enum: {
            values: ["DC", "Chicago", "Online", "Hawaii", "Miami"],
            message: "Where you at tho? But really, that location is non-existent fam"
        }
    }
   
})

//register the above code as a table in mongodb
const Dojo = mongoose.model("Dojo", DojoSchema )

module.exports = Dojo;
