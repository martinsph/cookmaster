const express = require('express');
const create = require('./createController');

const router = express.Router();

router.post('/', create);

module.exports = router;
