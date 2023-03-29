const Pool = require("../../database");

const createCommune = async (req, res) => {
  const { name, city_id } = req.body;
  try {
    const newCommune = await Pool.query(
      "INSERT INTO communes (name, city_id) VALUES ($1, $2) RETURNING *",
      [name, city_id]
    );
    res.json(newCommune.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createCommune;
