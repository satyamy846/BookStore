const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    cname:{
        type:String,
    },
    pages:{
        type:Number,
    },
    author:[{
        type:String
    }],
    language:{
        type:String
    }
});

const Books = mongoose.model('Books',schema);

module.exports = Books;