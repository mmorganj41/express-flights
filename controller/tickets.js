const Ticket = require('../model/ticket');

function newTicket(req, res, next) {
    
    res.render('tickets/new', {flight: req.params.id});
}

function create(req, res, next) {
    res.redirect(`/flights/${req.params.id}`);
}

module.exports = {
    new: newTicket,
    create,
}