const Pool = require("../../database");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (product.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = getProduct;
