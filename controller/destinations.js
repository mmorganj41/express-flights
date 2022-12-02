const Flight = require('../model/flight');

async function create(req, res, next) {
	try {
		const flight = await Flight.findById(req.params.id);
        console.log(flight);   
        flight.destinations.push(req.body);
		await flight.save();
		res.redirect(`/flights/${req.params.id}`);
	} catch(err) {
		console.log(err);
		res.send('Error finding by ID check terminal');
	}    
}

async function deleteOne(req, res, next) {
	try {
		const flight = await Flight.findOne({'destinations._id': req.params.id});
		flight.destinations.remove(req.params.id);
		console.log(flight);
		await flight.save();
		res.redirect(`/flights/${flight._id}`);
	} catch(err) {
		console.log(err);
		res.send('Error finding destination to delete');
	}
}

module.exports = {
    create,
    delete: deleteOne,
}