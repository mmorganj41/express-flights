const Flight = require('../model/flight');

function index(req, res, next) {
    Flight.find({}, (err, flights) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log(flights);
            res.render('flights/index', {flights: flights.sort((a,b) => a.departs - b.departs)});
        }
    })   
}

function newFlight(req, res, next) {
    res.render('flights/new');
};

function create(req, res, next) {
    console.log(req.body);
    Flight.create(req.body, function(err, flight) {
        if(err){
            console.log(err);
            res.redirect('/flights/new');
        } else {
            console.log(flight)

            res.redirect('/flights/');
        }
    })
}

module.exports = {
    index,
    new: newFlight,
    create,
};