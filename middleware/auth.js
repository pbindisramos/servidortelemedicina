const Usuario = require("../models/Usuario");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.jwt = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {
    try {
      //obtener token
      const token = authHeader.split(" ")[1];
      //comprobar el jwt
      const usuario = await jwt.verify(token, process.env.SECRETA);
      req.usuario = usuario;
    } catch (error) {
      console.log(error);
    }
  }
  next();
};

exports.isAdmin = async (req, res, next) => {
  const usuario = await Usuario.findById(req.usuario.id);
  const roles = await Role.find({ _id: { $in: usuario.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name == "admin") {
      next();
      return;
    }
  }
  res.status(403).json({ msg: "Necesitas permisos de Administrador" });
};

exports.isDoctor = async (req, res, next) => {
  const usuario = await Usuario.findById(req.usuario.id);
  const roles = await Role.find({ _id: { $in: usuario.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name == "doctor") {
      next();
      return;
    }
  }
  res.status(403).json({ msg: "Necesitas permisos de Doctor" });
};
