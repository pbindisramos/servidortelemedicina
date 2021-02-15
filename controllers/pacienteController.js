const Paciente = require("../models/Paciente");

exports.nuevoPaciente = async (req, res) => {
  //console.log(req.body);

  const paciente = await new Paciente(req.body);
  paciente.save();
  res.json({ msg: "Paciente creado Correctamente" });
};
