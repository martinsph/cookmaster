const recipes = require('../../model/entity')('recipes');

const errors = {
  invalidEntries: { status: 400, message: 'Invalid entries. Try again.' },
  emailFound: { status: 409, message: 'Email already resgistered' },
};

const isValidName = (name) => {
  if (name === null) throw errors.invalidEntries;
};

const isValidIngredients = (ingredients) => {
  if (ingredients === null) throw errors.invalidEntries;
};

const isValidPreparation = (preparation) => {
  if (preparation === null) throw errors.invalidEntries;
};

module.exports = async (newRecipe) => {
  const { name, ingredients, preparation } = newRecipe;

  isValidName(name);
  isValidIngredients(ingredients);
  isValidPreparation(preparation);

  const result = (await recipes.createModel(newRecipe)).ops[0];
  console.log(result);

  return { recipe: { result } };
};
