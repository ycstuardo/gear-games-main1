const Pool = require("../../database");

const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const newCategory = await Pool.query(
      "INSERT INTO categories (categoryName) VALUES ($1) RETURNING *",
      [categoryName]
    );
    res.json(newCategory.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = createCategory;
