const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const chanel= new Schema ({
    title: String,
    text: String,
    videoname: String,
    date: String,
    category: String

});

module.exports= mongoose.model('Channel', chanel);