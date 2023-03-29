const Pool = require("../../database");

const createAddress = async (req, res) => {
  try {
    const { street_name, street_number, user_id, city_id, commune_id } =
      req.body;
    const newAddress = await Pool.query(
      "INSERT INTO addresses (street_name, street_number, user_id, city_id, commune_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [street_name, street_number, user_id, city_id, commune_id]
    );
    res.json(newAddress.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = createAddress;
