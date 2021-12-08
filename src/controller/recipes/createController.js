const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { _id } = req.user;

    const result = await service.createService({ name, ingredients, preparation, userId: _id });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
