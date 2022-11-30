const express = require('express');
const router = express.Router();
const destinationsController = require('../controller/destinations');

router.post('/flights/:id/destinations', destinationsController.create);
router.delete('/destinations/:id', destinationsController.delete);

module.exports = router;
