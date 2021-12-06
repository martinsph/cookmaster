const user = require('../../model/entity')('users');

module.exports = async (name) => {
  const result = await user.getByEmail(name);
  return result;
};
