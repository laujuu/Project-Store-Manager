const express = require('express');

const salesRouter = express.Router();
const { salesController } = require('../controllers');

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSalesById);

module.exports = salesRouter;
