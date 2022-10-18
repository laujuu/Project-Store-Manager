const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect, use } = require("chai");

const productService = require("../../../src/services/products.service");
const productController = require("../../../src/controllers/products.controller");

use(sinonChai);

const { expectReturnAll, expectReturnOne } = require("../mocks/productsMocks");

describe("Testa a model de produtos", function () {
  


  it("se retorna todos produtos", async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "getAllProducts").resolves(expectReturnAll);

    await productController.getAllProducts({}, res);

    expect(res.status).to.have.been.calledOnceWith(200);
    expect(res.json).to.have.been.calledWith(expectReturnAll.message);
  });

  it("se retorna produto com id expecifico", async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, "getProductsById").resolves(expectReturnOne);


    await productController.getProductsById({ params: {id: 1} }, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledOnceWith(expectReturnOne[0]);
  });
});
