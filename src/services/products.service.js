const productsModel = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return { type: null, message: result };
};

const getProductsById = async (id) => {
  const result = await productsModel.getProductsById(id);
  if (result) return { type: null, message: result };
  return { type: 'PRODUCT_NOT_FOUND' };
};

module.exports = {
  getProductsById,
  getAllProducts,
};