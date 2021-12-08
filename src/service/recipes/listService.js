const recipes = require('../../model/entity')('recipes');

module.exports = async () => {
  const result = await recipes.listModel();
  const allRecipes = result;
  return allRecipes;
};
