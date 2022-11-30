const express = require('express');
const router = express.Router();
const flightsController = require('../controller/flights');

/* GET users listing. */
router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);

module.exports = router;
