const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const chanel= new Schema ({
    title: String,
    text: String,
    videoname: String,
    category: String,
    date: Date
});

module.exports= mongoose.model('Channel', chanel);
