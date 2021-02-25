const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const Role = require("../models/Role");

exports.crearMedico = async (req, res) => {
  //express validator
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //Verificación Usuario registrado

  const { nombre, email, password } = req.body;
  res.json(req.body);

  // let medico = await Usuario.findOne({ email });
  // if (medico) {
  //   return res
  //     .status(400)
  //     .json({ msg: "El correo ya se encuentra registrado" });
  // }

  //crear nuevo usuario
  // usuario = new Usuario(req.body);
  // if (roles) {
  // //   const foundRoles = await Role.find({ name: { $in: roles } });
  // //   usuario.roles = foundRoles.map((role) => role._id);
  // // } else {
  // //   const role = await Role.findOne({ name: "paciente" });
  // //   usuario.roles = [role._id];
  // // }

  // //hashear password
  // const salt = await bcrypt.genSalt(10);
  // usuario.password = await bcrypt.hash(password, salt);
  // try {
  //   await usuario.save();
  //   console.log(usuario);
  //   res.json({ msg: "Usuario creado correctamente" });
  // } catch (error) {
  //   console.log(error);
  // }
};
