const Flight = require('../model/flight');
const Ticket = require('../model/ticket')

async function index(req, res, next) {
    try {
		const flights = await Flight.find({})
		console.log(flights);
		res.render('flights/index', {flights: flights.sort((a,b) => a.departs - b.departs)});
	} catch(err) {
		console.log(err);
		res.redirect('/');
	} 
}

function newFlight(req, res, next) {
    const newFlight = new Flight();
    res.render('flights/new', {defaultDeparture: newFlight.departs});
};

async function create(req, res, next) {
	try {
		const flight = await Flight.create(req.body);

		console.log(flight)
		res.redirect('/flights/');
	} catch(err) {
		console.log(err);
		res.redirect('/flights/new');
	}
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