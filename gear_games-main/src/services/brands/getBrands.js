const Pool = require("../../database");

const getBrands = async (req, res) => {
  try {
    const allBrands = await Pool.query("SELECT * FROM brands");
    res.json(allBrands.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getBrands;
