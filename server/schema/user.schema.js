
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    password: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);