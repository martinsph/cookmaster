const createModel = require('./createModel');
const getAllModel = require('./getAllModel');
const getByEmailModel = require('./getByEmailModel');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  list: async () => getAllModel(collection),
  getByEmail: async (entity) => getByEmailModel(collection, entity),
});
