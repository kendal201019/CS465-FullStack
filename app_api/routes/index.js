const express = require('express'); // Express app
const router = express.Router(); //Router logic

// This is where we import the controllers we will route 
const tripsController = require('../controllers/trips');
//const {tripsList} = require("../controllers/trips"); //code change from online
// define route for our trips endpoint 
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(tripsController.tripsAddTrip); // Post Method Adds a trip

// GET Method routes tripsFindByCode - requires paramater 
// PUT Method routes tripsUpdateTrip - requires paramater
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;