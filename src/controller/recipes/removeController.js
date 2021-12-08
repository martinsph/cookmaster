const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id, role } = req.user;
    const result = await service.removeService({ id, userId: _id, role });

    return res.status(204).json(result);
  } catch (error) {
    next(error);
  }
};
