const user = require('../../model/entity')('users');

module.exports = async (email) => {
  const result = await user.getByEmail(email);
  return result;
};
