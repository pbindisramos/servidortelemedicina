const Usuario = require("../models/Usuario");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.autenticarUsuario = async (req, res, next) => {
  //Revisar si hay errores
  //Buscar Usuario
  const { email, password, roles } = req.body;
  const usuario = await Usuario.findOne({ email }).populate("roles");
  //console.log(usuario);

  if (!usuario) {
    res.status(401).json({ msg: "El usuario no existe" });
    return next();
  }

  //verificar password y autenticar
  if (bcrypt.compareSync(password, usuario.password)) {
    console.log("password correcto");
    //crear json web token
    const token = jwt.sign(
      {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        role: usuario.roles,
      },
      process.env.SECRETA,
      {
        expiresIn: "8h",
      }
    );
    console.log(token);
    res.json({ token });
  } else {
    res.status(401).json({ msg: "Password incorrecto" });
    return next();
  }
};

exports.usuarioAutenticado = async (req, res, next) => {
  res.json({ usuario: req.usuario });
  return next();
};
