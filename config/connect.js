const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connection;