const productsServices = require('../services');

const NOT_FOUND = 404;
const OK_STATUS = 200;

const getAllProducts = async (__req, res) => {
  const getProduct = await productsServices.getProductsById();
  res.status(OK_STATUS).json(getProduct.message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const getProduct = await productsServices.getProductsById(id);

  if (getProduct) return res.status(NOT_FOUND).json({ message: 'Product not found' });
  res.status(OK_STATUS).json(getProduct.message);
};

module.exports = {
  getProductsById,
  getAllProducts,
};