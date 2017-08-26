//for registering users booking not connected now

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
name: String,
email:  String


});

module.exports = mongoose.model("User" , UserSchema);