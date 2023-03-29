const Pool = require("../../database");

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;
    const updatedCategory = await Pool.query(
      "UPDATE categories SET categoryName = $1 WHERE id = $2 RETURNING *",
      [categoryName, id]
    );
    if (updatedCategory.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(updatedCategory.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = updateCategory;
