const Flight = require('../model/flight');

function newFlight(req, res, next) {
    res.render('flights/new')
};

module.exports = {new: newFlight};