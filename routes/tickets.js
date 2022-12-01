const express = require('express');
const Router = express.Router();
const ticketsController = require('../controller/tickets');

Router.get('/flights/:id/tickets/new', ticketsController.new);
Router.post('/flights/:id/tickets', ticketsController.create);

module.exports = Router;