const Pool = require("../../database");

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBrand = await Pool.query(
      "DELETE FROM brands WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedBrand.rows.length === 0) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json({ message: "Brand deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = deleteBrand;
