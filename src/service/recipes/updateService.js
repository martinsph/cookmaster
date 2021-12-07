const recipe = require('../../model/entity')('recipes');

module.exports = async (newRecipe) => {
  const { id, name, ingredients, preparation } = newRecipe;

  await recipe.updateModel(newRecipe);

  return { 
    _id: id,
    name,
    ingredients,
    preparation,
  };
};
