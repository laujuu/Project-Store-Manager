const { salesModel } = require('../models');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return { type: null, message: result };
};

const getSalesById = async (id) => {
  const result = await salesModel.getSalesById(id);
  if (result.length) return { type: null, message: result };
  return { type: 'SALE_NOT_FOUND' };
};

module.exports = {
  getSalesById,
  getAllSales,
};