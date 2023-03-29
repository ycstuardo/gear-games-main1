const Pool = require("../../database");

const getCommunes = async (req, res) => {
  try {
    const communes = await Pool.query("SELECT * FROM communes");
    res.json(communes.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getCommunes;
