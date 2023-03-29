const Pool = require("../../database");

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, address_id, id_rol } = req.body;
  if (!name || !email || !id_rol) {
    res.status(400).send("Missing required fields");
  } else {
    Pool.query(
      "UPDATE users SET name=$1, email=$2, addreses_id=$3, id_rol=$4 WHERE id=$5 RETURNING *",
      [name, email, address_id, id_rol, userId],
      (error, results) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (results.rows.length === 0) {
          res.status(404).send("User not found");
        } else {
          res.status(200).send(results.rows[0]);
        }
      }
    );
  }
};

module.exports = updateUser;
