const getByEmail = require('./getByEmailService');
const createToken = require('../../midlleware/auth');

const errors = {
  invalidEntries: { status: 401, message: 'All fields must be filled' },
  incorrectEntries: { status: 401, message: 'Incorrect username or password' },
};

const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (email == null) throw errors.invalidEntries;
  if (!regex.test(email)) throw errors.incorrectEntries;
};

const isValidPassword = (password) => {
  if (password == null) throw errors.invalidEntries;
};

const emailExists = async (email, password) => {
  const checkEmail = await getByEmail(email);
  if (checkEmail !== null || checkEmail.password !== password) throw errors.incorrectEntries;
};

module.exports = async (newUser) => {
  const { email, password } = newUser;

  isValidEmail(email);
  isValidPassword(password);
  emailExists(email);

  const checkEmail = await getByEmail(email);
  const { password: pass, ...dataleft } = checkEmail;
  const token = createToken(...dataleft);

  return token;
};
