const connection = require('../connection');

// função recebe a coleção e o novo documento a ser adicionado. 
// Neste caso, para user, um objeto { name, password, email, role }.
module.exports = async (collection, entity) => {
  try {
    const connecting = await connection();
    const result = await connecting.collection(collection).insertOne(entity);
    return result;
  } catch (error) {
    console.log(error);
  }
};
