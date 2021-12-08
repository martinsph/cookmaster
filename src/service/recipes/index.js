const createService = require('./createService');
const listService = require('./listService');
const getByIdService = require('./getByIdService');
const updateService = require('./updateService');
const removeService = require('./removeService');
const uploadService = require('./uploadService');

module.exports = {
  createService,
  listService,
  removeService,
  getByIdService,
  updateService,
  uploadService,
};
