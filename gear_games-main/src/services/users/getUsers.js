const Pool = require("../../database");

const getUsers = (req, res) => {
  Pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

module.exports = getUsers;
