const mongoose = require('mongoose'); //mongoose an interface to mongodb, meaning that we can use mongoose to allow us to do crud commands and other db commands without doing the mongodb commands and instead we can use javascript-> ORM = object relational mapper
 

const NinjaSchema = new mongoose.Schema({ //instructions to create a table in my db--> also called collection
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    numProjects: {
        type: Number,
        required:[true, "Number of Projects is required!"]
    },
    graduationDate: {
        type: Date,
        required: [true, "Grad date is required"]
    },
    isVeteran: {
        type: Boolean
    },
    profilePicUrl:{
        type:String,
        required: [true, "Profile pic is required"]
    }


})

//register the above code as a table in mongodb
const Ninja = mongoose.model("Ninja", NinjaSchema )

module.exports = Ninja;
