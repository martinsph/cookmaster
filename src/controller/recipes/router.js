const express = require('express');
const create = require('./createController');
const getAll = require('./getAllController');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', getAll);

module.exports = router;
