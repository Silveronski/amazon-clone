const express = require('express');
const router = express.Router();
const seedController = require('../controllers/seedController');

router.route('/').get(seedController);

module.exports = router;