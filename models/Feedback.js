const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
    },
    comment:{
        type:String
    }
});

const Feedback = mongoose.model('Feedback',schema);

module.exports = Feedback;