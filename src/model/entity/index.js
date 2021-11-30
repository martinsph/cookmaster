const createModel = require('./createModel');
const getAllModel = require('./getAllModel');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  list: async () => getAllModel(collection),
});
