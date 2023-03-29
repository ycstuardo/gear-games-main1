const Pool = require("../../database");

const deleteCommune = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCommune = await Pool.query(
      "DELETE FROM communes WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedCommune.rows.length === 0) {
      return res.status(404).json({ message: "Commune not found" });
    }
    res.json({ message: "Commune deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteCommune;
