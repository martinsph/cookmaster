const recipe = require('../../model/entity')('recipes');
const getByIdService = require('./getByIdService');

const errors = {
  wrongUserId: { status: 401, message: 'user not authorized' },
};

module.exports = async (recipeInfo) => {
  const { id, userId, role } = recipeInfo;

  const recipeId = await getByIdService(id);
  
  if (recipeId.userId === userId || role === 'admin') {
    const result = await recipe.removeModel(id);

    return result;
  }

 throw errors.wrongUserId;
};
