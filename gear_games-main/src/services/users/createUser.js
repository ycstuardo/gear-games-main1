const Pool = require("../../database");

const createUser = (req, res) => {
  const { name, email, id_rol = 3 } = req.body;
  if (!name || !email) {
    res.status(400).send("Missing required fields");
  } else {
    Pool.query(
      "INSERT INTO users (name, email, id_rol) VALUES ($1, $2, $3) RETURNING *",
      [name, email, id_rol],
      (error, results) => {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.status(201).send(results.rows[0]);
        }
      }
    );
  }
};

module.exports = createUser;
