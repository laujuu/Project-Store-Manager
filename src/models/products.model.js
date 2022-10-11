const connection = require('./connection');

const getAllProducts = async () => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const getProductsById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
};
