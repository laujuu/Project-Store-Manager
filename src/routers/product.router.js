const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers');

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductsById);

module.exports = productsRouter;
