const express = require('express');

const productsRouter = express.Router();
const productsController = require('../controllers');

const { validateName } = require('../middlewares/validateProducts');

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductsById);
productsRouter.post('/', validateName, productsController.createProducts);

module.exports = productsRouter;
