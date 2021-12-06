const service = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const result = await service.createService({ name, email, password, role: 'user' });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
