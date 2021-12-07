const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.removeService(id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
