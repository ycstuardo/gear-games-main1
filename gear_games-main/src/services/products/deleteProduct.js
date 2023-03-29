const Pool = require("../../database");

const deleteProduct = async (req, res) => {
  const {
    productName,
    price,
    stock,
    description,
    image,
    id_brand,
    id_category,
  } = req.body;
  const newProduct = await Pool.query(
    "INSERT INTO products (productName, price, stock, description, image, id_brand, id_category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [productName, price, stock, description, image, id_brand, id_category]
  );
  res.status(201).json(newProduct.rows[0]);
  try {
    const { id } = req.params;
    const deletedProduct = await Pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedProduct.rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = deleteProduct;
