const { ObjectId } = require('mongodb');
const connection = require('../connection');

// função recebe a coleção e o filtro por id.
module.exports = async (collection, id) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).findOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log(err);
  }
};
