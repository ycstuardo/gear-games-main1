const Pool = require("../../database");

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { street_name, street_number, user_id, city_id, commune_id } =
      req.body;
    const updatedAddress = await Pool.query(
      "UPDATE addresses SET street_name = $1, street_number = $2, user_id = $3, city_id = $4, commune_id = $5 WHERE id = $6 RETURNING *",
      [street_name, street_number, user_id, city_id, commune_id, id]
    );
    if (updatedAddress.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.json(updatedAddress.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = updateAddress;
