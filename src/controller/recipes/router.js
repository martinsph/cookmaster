const express = require('express');
const createController = require('./createController');
const listController = require('./listController');
const getByIdController = require('./getByIdController');
const updateController = require('./updateController');
const removeController = require('./removeController');
const uploadController = require('./uploadController');
const validadejwt = require('../../midlleware/validatejwt');
const uploadMiddleware = require('../../midlleware/upload');

const router = express.Router({ mergeParams: true });

router.post('/', validadejwt, createController);
router.get('/', listController);
router.get('/:id', getByIdController);
router.put('/:id', validadejwt, updateController);
router.delete('/:id', validadejwt, removeController);
router.put('/:id/image', validadejwt, uploadMiddleware.single('image'), uploadController);

module.exports = router;
