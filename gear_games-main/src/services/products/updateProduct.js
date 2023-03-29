const Pool = require("../../database");

const updateProduct = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = updateProduct;
