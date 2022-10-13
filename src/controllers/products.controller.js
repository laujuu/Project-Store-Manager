const productsServices = require('../services');
const errorMap = require('../utils/errorMap');

const OK_STATUS = 200;

const getAllProducts = async (__req, res) => {
  const { message } = await productsServices.getAllProducts();
  return res.status(OK_STATUS).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.getProductsById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message: 'Product not found' });
  res.status(OK_STATUS).json(message);
};

module.exports = {
  getProductsById,
  getAllProducts,
};