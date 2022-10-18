const { salesServices } = require('../services');
const errorMap = require('../utils/errorMap');

const OK_STATUS = 200;

const getAllSales = async (__req, res) => {
  const { message } = await salesServices.getAllSales();
  return res.status(OK_STATUS).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.getSalesById(id);
  if (type) {
 return res.status(errorMap.mapError(type)).json({ message: 'Sale not found' }); 
}
  res.status(OK_STATUS).json(message);
};

module.exports = {
  getSalesById,
  getAllSales,
};