const Pool = require("../../database");

const getCommune = async (req, res) => {
  const { id } = req.params;
  try {
    const commune = await Pool.query("SELECT * FROM communes WHERE id = $1", [
      id,
    ]);
    if (commune.rows.length === 0) {
      return res.status(404).json({ message: "Commune not found" });
    }
    res.json(commune.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getCommune;
