require('dotenv').config();
const mongoose = require('mongoose');
const db_name = "wall_of_ninjas_dbbb";


//mongoose connection/config
mongoose.connect(`mongodb+srv://root:${process.env.MONGODB_PASSWORD}@mern.yukfl.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
