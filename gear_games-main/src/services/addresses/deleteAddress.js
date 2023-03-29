const Pool = require("../../database");

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAddress = await Pool.query(
      "DELETE FROM addresses WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedAddress.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.json({ message: "Address deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = deleteAddress;
