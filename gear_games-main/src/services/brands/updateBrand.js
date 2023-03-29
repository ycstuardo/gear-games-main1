const Pool = require("../../database");

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { brandName } = req.body;
    const updatedBrand = await Pool.query(
      "UPDATE brands SET brandName = $1 WHERE id = $2 RETURNING *",
      [brandName, id]
    );
    if (updatedBrand.rows.length === 0) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(updatedBrand.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = updateBrand;
