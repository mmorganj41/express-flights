const Flight = require('../model/flight');

function newFlight(req, res, next) {
    res.render('flights/new')
};

function create(req, res, next) {
    console.log(req.body);
    Flight.create(req.body, function(err, flight) {
        if(err){
            console.log(err);
            res.send('err creating, check terminal');
        }
        console.log(flight)

        res.redirect('/');
    })
}

module.exports = {
    new: newFlight,
    create
};