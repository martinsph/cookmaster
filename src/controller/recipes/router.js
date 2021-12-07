const express = require('express');
const createController = require('./createController');
const listController = require('./listController');
const getByIdController = require('./getByIdController');
const updateController = require('./updateController');
const removeController = require('./removeController');
const auth = require('../../midlleware/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, createController);
router.get('/', listController);
router.get('/:id', getByIdController);
router.put('/:id', updateController);
router.delete('/:id', removeController);

module.exports = router;
