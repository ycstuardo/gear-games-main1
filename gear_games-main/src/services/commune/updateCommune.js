const Pool = require("../../database");

const updateCommune = async (req, res) => {
  const { id } = req.params;
  const { name, city_id } = req.body;
  try {
    const updatedCommune = await Pool.query(
      "UPDATE communes SET name = $1, city_id = $2 WHERE id = $3 RETURNING *",
      [name, city_id, id]
    );
    if (updatedCommune.rows.length === 0) {
      return res.status(404).json({ message: "Commune not found" });
    }
    res.json(updatedCommune.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = updateCommune;
