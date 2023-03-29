const Pool = require("../../database");

const getBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Pool.query("SELECT * FROM brands WHERE id = $1", [id]);
    if (brand.rows.length === 0) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(brand.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getBrand;
