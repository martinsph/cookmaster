const service = require('../../service/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await service.createService({ email, password });
    return res.status(200).json({ token: result });
  } catch (error) {
    next(error);
  }
};
