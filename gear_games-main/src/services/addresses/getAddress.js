const Pool = require("../../database");

const getAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Pool.query("SELECT * FROM addresses WHERE id = $1", [
      id,
    ]);
    if (address.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.json(address.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getAddress;
