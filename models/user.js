//for registering users booking not connected now

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

username: String,
password: String,
email:  String,  
Appointments: [
{
type: mongoose.Schema.Types.ObjectId,
ref: "Appointments"
}

]

});

module.exports = mongoose.model("User" , UserSchema);