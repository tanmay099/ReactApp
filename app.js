//server.js
'use strict'

//first we import our dependencies...
var express = require('express'),
    mongoose = require('mongoose'),
    Doctor = require('./models/docter'),
    User = require('./models/user'),
    Booking = require('./models/booking'),
    seedDB = require('./seed'),
    app = express(),
    router = express.Router()
var bodyParser = require('body-parser'); 
//port setting
var port = process.env.API_PORT || 3001;



//var mongoDB = 'mongodb://localhost/doctor_demo';
//mlab url for limited view only
var mongoDB = 'mongodb://tanmayS:tanmayS@ds157233.mlab.com:57233/doctor_demo';

mongoose.connect(mongoDB, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
seedDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// prevent errors from Cross Origin Resource Sharing, 
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});
app.use("/api", router);
// adding the /doctor route to  /api router
router.route('/doctors')
  //retriving all the doctors from database
  .get(function(req, res) {
    //query for data base schema
    Doctor.find(function(err, doctors) {
      if (err)
        res.send(err);
      //res json for the list of doctors from server.
      res.json(doctors);
      
    });
  });

  //api route for registering user
  router.route('/register')
  .post(function(req, res) {
    var user = new User();
    (req.body.email) ? user.email = req.body.email : null;
    (req.body.name) ? user.name = req.body.name : null;
    
   
    user.save(function(err,data) {
      if (err)
        res.send(err);
      console.log(data);
      res.json({ message: 'Appointment successfull' });
    });
  });

router.route('/booking')
  //retriving all booking timings from database
  .get(function(req, res) {
    //mongodb db 
    Booking.find(function(err, doctors) {
      if (err)
        res.send(err);
      //res json for the list of doctors from server.
      res.json(doctors);
      
    });
  });

  

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
