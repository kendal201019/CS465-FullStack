const express = require('express'); // Express app
const router = express.Router(); //Router logic

// This is where we import the controllers we will route
//const tripsController = require('../controllers/trips');
const {tripsList} = require("../controllers/trips"); //code change from online
// define route for our trips endpoint 
/*router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); // GET Method routes tripsList
*/
router.get("/trips", tripsList); //GET:
module.exports = router;