const recipe = require('../../model/entity')('recipes');
const getByIdService = require('./getByIdService');

const errors = {
  wrongUserId: { status: 401, message: 'user not authorized' },
};

module.exports = async (newRecipe) => {
  const { id, name, ingredients, preparation, userId, role } = newRecipe;
  const recipeId = await getByIdService(id);
  
  if (recipeId.userId === userId || role === 'admin') {
    await recipe.updateModel(newRecipe);

    return { 
      _id: id,
      name,
      ingredients,
      preparation,
      userId,
    };
  }

 throw errors.wrongUserId;
};
