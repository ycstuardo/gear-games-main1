const Pool = require("../../database");

const getUser = (req, res) => {
  const userId = req.params.id;
  Pool.query("SELECT * FROM users WHERE id=$1", [userId], (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (results.rows.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(results.rows[0]);
    }
  });
};

module.exports = getUser;
