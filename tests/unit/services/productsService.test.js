const sinon = require("sinon");
const { expect } = require("chai");

const productModel = require("../../../src/models");
const productService = require("../../../src/services");

const { expectReturnAll, expectReturnOne } = require("../mocks/productsMocks");

describe("Testa a service de produtos", function () {
  it("se retorna todos produtos", async function () {
    before(async () => {
      sinon.stub(productModel, "getAllProducts").resolves(expectReturnAll);
    });

    const { message } = await productService.getAllProducts();
    expect(message).to.be.deep.eq(expectReturnAll);
    expect(message).to.be.a("array");

    afterEach(() => {
      sinon.restore();
    });
  });

  it("se retorna produto com id expecifico", async function () {
    sinon.stub(productModel, "getProductsById").resolves(expectReturnOne);

    const {type, message} = await productService.getProductsById(1);
    expect(message).to.be.deep.eq(expectReturnOne);
    expect(type).to.be.deep.eq(null);
  });
});
