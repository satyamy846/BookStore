const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
    }
});

const Catagory = mongoose.model('Catagory',schema);

module.exports = Catagory;