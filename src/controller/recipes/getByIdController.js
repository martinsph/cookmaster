const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getByIdService(id);
    
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
