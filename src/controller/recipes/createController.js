const service = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;

    const result = await service.createService({ name, ingredients, preparation });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
