const Pool = require("../../database");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await Pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).send("Invalid credentials");
    }

    // Generar un token de sesión con una duración de 24 horas
    const token = jwt.sign({ id: result.rows[0].id }, "tu_secreto", {
      expiresIn: "24h",
    });

    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

exports.modules = login;
