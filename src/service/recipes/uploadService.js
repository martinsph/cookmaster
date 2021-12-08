const recipe = require('../../model/entity')('recipes');
const getByIdService = require('./getByIdService');

const errors = {
  wrongUserId: { status: 401, message: 'user not authorized' },
};

module.exports = async (newImage) => {
  const { id, userId, role, image } = newImage;
  const recipeId = await getByIdService(id);
  const { name, ingredients, preparation } = recipeId;
  
  if (recipeId.userId === userId || role === 'admin') {
    await recipe.updateModel(newImage);

    return { 
      _id: id,
      name,
      ingredients,
      preparation,
      userId,
      image,
    };
  }

 throw errors.wrongUserId;
};