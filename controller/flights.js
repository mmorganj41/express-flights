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

async function show(req, res, next) {
	try {
		const flight = await Flight.findById(req.params.id);
		console.log(flight);
		const tickets = await Ticket.find({flight: flight._id});
		res.render('flights/show', {flight, tickets});
	} catch(err) {
		console.log(err);
		res.send('Error showing, check terminal')
	}
}

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};