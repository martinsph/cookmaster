const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await service.getByIdService(id);
    
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
