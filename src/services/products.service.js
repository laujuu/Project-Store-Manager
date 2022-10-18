const { productsModel } = require('../models');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return { type: null, message: result };
};

const getProductsById = async (id) => {
  const result = await productsModel.getProductsById(id);
  if (result) return { type: null, message: result };
  return { type: 'PRODUCT_NOT_FOUND' };
};

const createProducts = async (name) => {
  const newProductId = await productsModel.createProducts({ name });
  const newProduct = await productsModel.getProductsById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  getProductsById,
  getAllProducts,
  createProducts,
};