const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    name: String,
    link: String
})

const PhotoMod = mongoose.model('Photo', photoSchema);
module.exports = PhotoMod;
