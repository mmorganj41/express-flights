const Ticket = require('../model/ticket');

function newTicket(req, res, next) {
    
    res.render('tickets/new', {flight: req.params.id});
}

async function create(req, res, next) {
    try {
		req.body.flight = req.params.id;
    	const ticket = await Ticket.create(req.body);
		console.log(ticket);
        res.redirect(`/flights/${req.params.id}`);
	} catch(err) {
		console.log(err);
		res.redirect(`/flights/${req.params.id}/tickets/new`);
	}
	req.body.flight = req.params.id;    
}

async function deleteTicket(req, res, next) {
	try {
		const ticket = await Ticket.findById(req.params.id);
		console.log(ticket);
		let flight = ticket.flight;
		await ticket.remove();
		res.redirect(`/flights/${flight}`);
	} catch(err) {
		console.log(err)
		res.redirect('/flights');
	}
}

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
}