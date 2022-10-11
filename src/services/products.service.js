const productsModel = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return { type: null, message: result };
};

const getProductsById = async (productId) => {
  const result = await productsModel.getProductsById(productId);
  return { type: null, message: result };
};

module.exports = {
  getProductsById,
  getAllProducts,
};