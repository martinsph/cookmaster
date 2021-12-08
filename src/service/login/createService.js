const jwt = require('jsonwebtoken');
const getByEmail = require('./getByEmailService');

const apiSecret = 'mysecret';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

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
  if (checkEmail === null) throw errors.incorrectEntries;
  if (checkEmail.password !== password) throw errors.incorrectEntries;

  const { password: pass, ...payload } = checkEmail;
  const token = jwt.sign(payload, apiSecret, jwtConfig);
  return token;
};

module.exports = async (newUser) => {
  const { email, password } = newUser;
  
  isValidEmail(email);
  isValidPassword(password);
  const token = await emailExists(email, password);

  return token;
};
