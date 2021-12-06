const jwt = require('jsonwebtoken');

const apiSecret = 'mysecret';

const jwtConfig = {
  expiresin: '1d',
  algorithm: 'HS256',
};

const createToken = async (payload) => {
  const token = jwt.sign(payload, apiSecret, jwtConfig);
  return token;
};

const validateToken = (token) => {
  try {
    return jwt.verify(token, apiSecret);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createToken,
  validateToken,
};
