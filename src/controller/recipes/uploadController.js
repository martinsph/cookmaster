const service = require('../../service/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id, role } = req.user;
    const image = `localhost:3000/${req.file.path}`;

    const result = await service.uploadService({
      id, 
      userId: _id, 
      role,
      image,
    });
    
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
