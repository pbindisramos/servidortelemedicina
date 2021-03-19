const { json } = require('express');
const Agenda = require('../models/Agenda');

exports.crearAgenda = async (req, res, next) => {
  try {
    //const dias = await Object.keys(req.body.days);
    // let day = {};
    // dias.map((diax, i) => {
    //   day += `${diax}, `;
    //   return day;
    // });

    //const activo = ['false'];
    // const activo1 = req.body.days;
    // console.log(activo1);

    agenda = new Agenda({
      dias: [
        {
          dia: 'Lunes',
          activo: true,
        },
      ],
    });
    await agenda.save();
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
