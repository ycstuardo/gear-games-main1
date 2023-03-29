const Pool = require("../../database");

const getCategories = async (req, res) => {
  try {
    const allCategories = await Pool.query("SELECT * FROM categories");
    res.json(allCategories.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = getCategories;
