const createModel = require('./createModel');
const getByEmailModel = require('./getByEmailModel');

module.exports = (collection) => ({
  create: async (entity) => createModel(collection, entity),
  getByEmail: async (email) => getByEmailModel(collection, email),
});
