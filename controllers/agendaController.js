const Agenda = require('../models/Agenda');

exports.crearAgenda = async (req, res, next) => {
  try {
    const agenda = new Agenda(req.body);
    agenda.doctor = req.usuario.id;
    agenda.save();
    res.json(agenda);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};
