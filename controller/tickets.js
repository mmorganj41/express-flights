const Ticket = require('../model/ticket');

function newTicket(req, res, next) {
    res.send('new Ticket works');
}

module.exports = {
    new: newTicket,
}