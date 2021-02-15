const Paciente = require("../models/Paciente");

exports.nuevoPaciente = async (req, res) => {
  //Verificación Usuario registrado

  const { email } = req.body;

  let paciente = await Paciente.findOne({ email });
  if (paciente) {
    return res
      .status(400)
      .json({ msg: "El correo ya se encuentra registrado" });
  }
  paciente = await new Paciente(req.body);
  paciente.save();
  res.json({ msg: "Paciente creado Correctamente" });
};
