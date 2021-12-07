const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const result = await service.listService();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
