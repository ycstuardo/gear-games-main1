const Pool = require("../../database");

const getAddresses = async (req, res) => {
  try {
    const allAddresses = await Pool.query("SELECT * FROM addresses");
    res.json(allAddresses.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getAddresses;
