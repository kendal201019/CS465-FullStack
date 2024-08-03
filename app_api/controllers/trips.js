const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// GET: trips - list all the trips 
// Regardless of outcome, response must include HTML status code 
// and JSON message to teh requesting client 
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records 
        .exec();

    //Uncomment the following line to show results of querey 
    //On the console
    //console.log(q);

    if(!q) {
        //Database returned no data
        return res
                .status(404)
                .json(err); 
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};


// GET: trips - list all the trips 
// Regardless of outcome, response must include HTML status code 
// and JSON message to teh requesting client 
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return single record
        .exec();

    //Uncomment the following line to show results of querey 
    //On the console
    //console.log(q);

    if(!q) {
        //Database returned no data
        return res
                .status(404)
                .json(err); 
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};