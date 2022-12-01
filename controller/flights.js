const Flight = require('../model/flight');
const Ticket = require('../model/ticket')

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
    const newFlight = new Flight();
    res.render('flights/new', {defaultDeparture: newFlight.departs});
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

function show(req, res, next) {
    Flight.findById(req.params.id, (err, flight) => {
        console.log(flight);
        if (err) {
            console.log(err);
            return res.send('Error showing, check terminal')
        }

        Ticket.find({flight: flight._id}, (err, tickets) => {
            if (err) {
                console.log(err);
                return res.send('Error finding tickets, check terminal')
            }

            res.render('flights/show', {flight, tickets});
        });
    });
}

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};