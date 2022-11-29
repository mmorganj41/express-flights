const Flight = require('../model/flight');

function index(req, res, next) {
    res.send('index works');
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

            res.redirect('/');
        }
    })
}

module.exports = {
    index,
    new: newFlight,
    create,
};