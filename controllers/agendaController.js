const Agenda = require('../models/Agenda');

exports.crearAgenda = async (req, res, next) => {
  try {
    console.log(req.body.days.Lunes[0].manana_comienzo);
  } catch (error) {
    console.log(error);
  }
  // try {

  //   //console.log(req.body);
  //   const agenda = new Agenda(req.body);
  //   agenda.doctor = req.usuario.id;
  //   agenda.save();
  //   res.json(agenda);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send('Hubo un error');
  // }
};
