const express = require('express');
const Router = express.Router();
const ticketsController = require('../controller/tickets');

Router.get('/flights/:id/tickets/new', ticketsController.new);

module.exports = Router;