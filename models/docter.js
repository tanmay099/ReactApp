var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({

 name: String,
 qualification: String,
 experence: String,
 image: String,
 fee: Number,
 ocupation: String,
 location:  String,
//all feedback to a perticullar doctor are stored as objectid array of each feedback
 feedback: [
{
   type: mongoose.Schema.Types.ObjectId,
   ref: "Feedback"



}
]

});
module.exports = mongoose.model("Doctor" , doctorSchema);