const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
//const Role = require("../models/Role");

exports.crearMedico = async (req, res) => {
  //express validator
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //Verificación Usuario registrado

  const { nombre, email, password, role } = req.body;

  let medico = await Usuario.findOne({ email });
  if (medico) {
    return res
      .status(400)
      .json({ msg: "El correo ya se encuentra registrado" });
  }

  //crear nuevo usuario
  usuario = new Usuario({ nombre, email, password, role: "doctor" });

  //hashear password
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(password, salt);
  try {
    await usuario.save();
    console.log(usuario);
    res.json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

exports.getMedicos = async (req, res, next) => {
  const usuario = await Usuario.find({});
  try {
    // if (usuario.role == "doctor") {
    //   res.status(200).json({
    //     usuario: req.usuario,
    //   });
    // }
    res.status(200).json({
      usuario: req.usuario,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

// exports.getMedico = async (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);
//     if (!user) return next(new Error("User does not exist"));
//     res.status(200).json({
//       data: user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteDoctor = async (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     await User.findByIdAndDelete(userId);
//     res.status(200).json({
//       data: null,
//       message: "User has been deleted",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
