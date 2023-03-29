const Pool = require("../../database");

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    if (category.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getCategory;
