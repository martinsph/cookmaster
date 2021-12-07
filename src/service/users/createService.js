const user = require('../../model/entity')('users');
const getByEmail = require('./getByEmailService');

const errors = {
  invalidEntries: { status: 400, message: 'Invalid entries. Try again.' },
  emailFound: { status: 409, message: 'Email already resgistered' },
};

const isValidName = (name) => {
  if (name === null) throw errors.invalidEntries;
};

const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (email === null) throw errors.invalidEntries;
  if (!regex.test(email)) throw errors.invalidEntries;
};

const isValidPassword = (password) => {
  if (password === null) throw errors.invalidEntries;
};

const emailExists = async (email) => {
  const checkEmail = await getByEmail(email);
  if (checkEmail !== null) throw errors.emailFound;
};

module.exports = async (newUser) => {
  const { name, email, password } = newUser;

  isValidName(name);
  isValidEmail(email);
  isValidPassword(password);
  await emailExists(email);

  const result = await user.createModel(newUser);

  return result.ops[0];
};
