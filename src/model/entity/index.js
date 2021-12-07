const create = require('./createModel');
const getByEmail = require('./getByEmailModel');
const getById = require('./getByIdModel');
const list = require('./listModel');
const update = require('./updateModel');
const remove = require('./removeModel');

module.exports = (collection) => ({
  createModel: async (entity) => create(collection, entity),
  listModel: async () => list(collection),
  getByEmailModel: async (email) => getByEmail(collection, email),
  getByIdModel: async (id) => getById(collection, id),
  updateModel: async (entity) => update(collection, entity),
  removeModel: async (id) => remove(collection, id),
});
