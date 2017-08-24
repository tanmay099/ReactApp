

var Doctor = require('./models/docter');
var mongoose = require('mongoose');






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
        qualification: "MBBS - SERGeN",
        experence: "10 years",
        image: "https://drparivar.com/images/doctor-profile-pic.png",
        fee: 500,
        ocupation: "Pshycologist",
        location: "indranager, Bangluru"
       
    }

]



//var mongoDB = 'mongodb://<DBUSERNAME>:<DBPASSWORD>@ds019836.mlab.com:19836/doctor';

function seedDB(){

    

console.log("1");

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