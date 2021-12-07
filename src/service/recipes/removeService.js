const recipe = require('../../model/entity')('recipes');

module.exports = async (id) => {
  const result = await recipe.removeModel(id);
  
  return result;
};
