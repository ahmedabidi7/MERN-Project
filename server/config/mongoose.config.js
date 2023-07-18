const mongoose = require('mongoose')


const DB = process.env.DB;


mongoose.connect('mongodb://127.0.0.1:27017/'+DB , {
    useNewUrlParser: true, //options we pass to get rid of deprecation messages in our terminal
    useUnifiedTopology: true}
    ) // Connecting to MongoDB with Mongoose
    .then(() => console.log(`Established a connection to the ${DB} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${DB} database` , err));


