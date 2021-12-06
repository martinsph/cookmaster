const service = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = {
      name,
      email,
      password,
      role: 'user',
    };

    const result = await service.createService({ newUser });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
