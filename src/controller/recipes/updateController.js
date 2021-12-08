const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ingredients, preparation } = req.body;
    const { _id, role } = req.user;

    const result = await service.updateService({ 
      id, 
      name, 
      ingredients, 
      preparation, 
      userId: _id, 
      role, 
    });
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
