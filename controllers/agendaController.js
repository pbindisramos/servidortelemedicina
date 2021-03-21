const { json } = require('express');
const { db, remove } = require('../models/Agenda');
const Agenda = require('../models/Agenda');

exports.crearAgenda = async (req, res, next) => {
  try {
    const dias = await Object.keys(req.body.days);
    const dias2 = await Object.entries(req.body.days);
    const activo = await dias2.map((dia, i) => {
      return dia[1][0].activo;
    });
    const manana_comienzo = await dias2.map((dia, i) => {
      return dia[1][0].manana_comienzo;
    });
    const manana_fin = await dias2.map((dia, i) => {
      return dia[1][0].manana_fin;
    });
    const tarde_comienzo = await dias2.map((dia, i) => {
      return dia[1][0].tarde_comienzo;
    });
    const tarde_fin = await dias2.map((dia, i) => {
      return dia[1][0].tarde_fin;
    });

    agenda = new Agenda({
      dias: [
        {
          dia: dias[0],
          activo: activo[0],
          manana_comienzo: manana_comienzo[0],
          manana_fin: manana_fin[0],
          tarde_fin: tarde_fin[0],
        },
        {
          dia: dias[1],
          activo: activo[1],
          manana_comienzo: manana_comienzo[1],
          manana_fin: manana_fin[1],
          tarde_comienzo: tarde_comienzo[1],
          tarde_fin: tarde_fin[1],
        },
        {
          dia: dias[2],
          activo: activo[2],
          manana_comienzo: manana_comienzo[2],
          manana_fin: manana_fin[2],
          tarde_comienzo: tarde_comienzo[2],
          tarde_fin: tarde_fin[2],
        },
        {
          dia: dias[3],
          activo: activo[3],
          manana_comienzo: manana_comienzo[3],
          manana_fin: manana_fin[3],
          tarde_comienzo: tarde_comienzo[3],
          tarde_fin: tarde_fin[3],
        },
        {
          dia: dias[4],
          activo: activo[4],
          manana_comienzo: manana_comienzo[4],
          manana_fin: manana_fin[4],
          tarde_comienzo: tarde_comienzo[4],
          tarde_fin: tarde_fin[4],
        },
        {
          dia: dias[5],
          activo: activo[5],
          manana_comienzo: manana_comienzo[5],
          manana_fin: manana_fin[5],
          tarde_comienzo: tarde_comienzo[5],
          tarde_fin: tarde_fin[5],
        },
        {
          dia: dias[6],
          activo: activo[6],
          manana_comienzo: manana_comienzo[6],
          manana_fin: manana_fin[6],
          tarde_comienzo: tarde_comienzo[6],
          tarde_fin: tarde_fin[6],
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
