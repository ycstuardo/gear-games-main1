const Pool = require("../../database");


const getProducts = async (req, res) => {
  try {
    const products = await Pool.query("SELECT * FROM products");
    res.json(products.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = getProducts;
