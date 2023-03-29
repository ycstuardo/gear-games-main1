const Pool = require("../../database");

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Pool.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedCategory.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = deleteCategory;
