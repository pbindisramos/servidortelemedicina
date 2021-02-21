const Usuario = require("../models/Usuario");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {
    try {
      //obtener token
      const token = authHeader.split(" ")[1];
      //comprobar el jwt
      const usuario = jwt.verify(token, process.env.SECRETA);
      req.usuario = usuario;
      console.log(req.usuario.id);
    } catch (error) {
      console.log(error);
    }
  }

  next();
};

// module.exports = async (req, res, next) => {
//   const usuario = await Usuario.findById(usuario._id);

//   next();
// };
