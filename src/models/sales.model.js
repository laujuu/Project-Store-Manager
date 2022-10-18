const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `
    SELECT 
      s.id AS saleId,
      sp.product_id AS productId,
      sp.quantity, s.date
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON s.id = sp.sale_id`,
  );
  return result;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    ` 
    SELECT 
      sp.product_id AS productId,
      sp.quantity, s.date
   FROM sales AS s
   INNER JOIN sales_products AS sp
   ON s.id = sp.sale_id
   WHERE sp.sale_id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSalesById,
};