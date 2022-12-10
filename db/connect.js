const mongoose = require('mongoose')
require('dotenv').config()


const db = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then((conn) =>{
    console.log("database connected");
})
.catch((err) =>{
    console.log(err);
})