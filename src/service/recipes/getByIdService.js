const recipe = require('../../model/entity')('recipes');

const errors = {
  wrongId: { 
    status: 422, code: 'invalid_data', message: 'recipe not found' },
};

const isValidId = async (result) => {
  if (result == null) throw errors.wrongId;
};

module.exports = async (id) => {
  const result = await recipe.getByIdModel(id);

  await isValidId(result);

  return result;
};
