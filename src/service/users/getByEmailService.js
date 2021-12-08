const user = require('../../model/entity')('users');

module.exports = async (email) => {
  const result = await user.getByEmailModel(email);
  return result;
};
