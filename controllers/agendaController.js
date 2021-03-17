const Agenda = require('../models/Agenda');

exports.crearAgenda = async (req, res, next) => {
  try {
    const dias = await Object.keys(req.body.days);
    const dia = dias.map((dia, i) => {
      return i;
    });
    req.body.days.activo;
    const activo = req.body.days;
    console.log(activo.map);

    // agenda = new Agenda({ dia });
    // await agenda.save();
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
