

var Doctor = require('./models/docter');
var Booking = require('./models/booking');
var mongoose = require('mongoose');
var moment = require('moment');





var doctor = [
    {
       
        name: "Ramya",
        qualification: "BDS, MDS - Prosthodontics",
        experence: "17 years",
        image: "https://drparivar.com/images/doctor-profile-pic.png",
        fee: 200,
        ocupation: "Dentist",
        location: "indranager, Bangluru"
      
    },
    {
       
        name: "nikhil",
        qualification: "MBBS - SERGEN",
        experence: "10 years",
        image: "https://drparivar.com/images/doctor-profile-pic.png",
        fee: 500,
        ocupation: "Pshycologist",
        location: "indranager, Bangluru"
       
    }

]

var data =[
  {id:1,1:'',2:'morning',3:'afternoon',4:'evening',5:'night'},
          {id:2,1:moment().format("MMM Do YY dddd"),2:'10:00AM',3:'2:00PM',4:'4:00',5:'7:00'},
          {id:3,1:'',2:'10:30AM',3:'2:30PM',4:'4:30PM',5:'7:30PM'},
          {id:4,1:'',2:'11:00',3:'3:00',4:'5:00PM',5:'8:00'},
          {id:5,1:'',2:'11:30',3:'3:30PM',4:'5:30PM',5:'8:30PM'}




]


//var mongoDB = 'mongodb://<DBUSERNAME>:<DBPASSWORD>@ds019836.mlab.com:19836/doctor';

// function seedDB(){

    

// console.log("1");

// data.forEach(function(seed){

// Booking.create(seed, function(err,data){
// if(err){
// console.log(err);

// }else{
// console.log("added");

// }


// }
// );
// });
// }
function seedDB(){

 data.forEach(function(seed){

 Booking.create(seed, function(err,data){
 if(err){
 console.log(err);

 }else{
 console.log("added");

 }
});
});



    doctor.forEach(function(seed){

Doctor.create(seed, function(err,data){
if(err){
console.log(err);

}else{
console.log("added");

}


}
);
});
}




module.exports = seedDB;