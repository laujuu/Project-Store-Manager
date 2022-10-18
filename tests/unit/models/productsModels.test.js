const sinon = require("sinon");
const { expect } = require("chai");

const ProductsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/connection");

const { expectReturnAll, expectReturnOne } = require("../mocks/productsMocks");

describe("Testa a model de produtos", function () {
  beforeEach(() => {
    sinon
      .stub(connection, "execute")
      .resolves([expectReturnAll, expectReturnOne]);
  });

  it("se retorna todos produtos", async function () {
    const result = await ProductsModel.getAllProducts();
    expect(result).to.be.a("array");
    expect(result).to.be.deep.eq(expectReturnAll);
  });

  it("se retorna produto com id expecifico", async function () {
    const result = await ProductsModel.getProductsById(1);
    expect(result).to.be.deep.eq(expectReturnOne);
  });

  afterEach(() => {
    sinon.restore();
  });
});
