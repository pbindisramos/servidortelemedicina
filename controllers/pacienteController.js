const Paciente = require("../models/Paciente");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.nuevoPaciente = async (req, res) => {
  //express validator
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //Verificación Usuario registrado

  const { email, password } = req.body;

  let paciente = await Paciente.findOne({ email });
  if (paciente) {
    return res
      .status(400)
      .json({ msg: "El correo ya se encuentra registrado" });
  }

  //crear nuevo usuario
  paciente = new Paciente(req.body);

  //hashear password
  const salt = await bcrypt.genSalt(10);
  paciente.password = await bcrypt.hash(password, salt);
  try {
    await paciente.save();
    res.json({ msg: "Paciente creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
