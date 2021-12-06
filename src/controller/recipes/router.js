const express = require('express');
const create = require('./createController');

const router = express.Router();
// const router = express.Router({ mergeParams: true });

router.post('/', create);

module.exports = router;
