const jwt = require('jsonwebtoken');

const apiSecret = 'mysecret';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: 'missing auth token' });
    }

    try {
      const decoded = jwt.verify(token, apiSecret);
      
      req.user = decoded.data;
      
      next();
    } catch (err) {
    return res.status(401).send({ message: 'jwt malformed' });
    }
  } catch (err) {
    next(err);
  }
};
