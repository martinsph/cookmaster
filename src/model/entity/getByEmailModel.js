const connection = require('../connection');

// função recebe a coleção e o filtra por email.
module.exports = async (collection, _email) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).findOne({ email: _email });
  } catch (error) {
    console.log(error);
  }
};
