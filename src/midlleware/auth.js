const jwt = require('jsonwebtoken');

const apiSecret = 'mysecret';

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.header;

    if (authorization === null) {
      return res.status(401).send({ message: 'missing auth token' });
    }

    try {
      const decoded = jwt.verify(authorization, apiSecret);
      return decoded;
    } catch (err) {
    return res.status(401).send({ message: 'jwt malformed' });
    }
  } catch (err) {
    next(err);
  }
};
