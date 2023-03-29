const Pool = require("../../database");

const createBrand = async (req, res) => {
  try {
    const { brandName } = req.body;
    const newBrand = await Pool.query(
      "INSERT INTO brands (brandName) VALUES ($1) RETURNING *",
      [brandName]
    );
    res.json(newBrand.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = createBrand;
