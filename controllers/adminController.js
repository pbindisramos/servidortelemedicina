const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
//const { nuevoUsuario } = require('./usuarioController');
//const Role = require("../models/Role");

exports.crearMedico = async (req, res) => {
  //express validator
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //Verificación Usuario registrado

  const { nombre, email, password } = req.body;

  let medico = await Usuario.findOne({ email });
  if (medico) {
    return res
      .status(400)
      .json({ msg: 'El correo ya se encuentra registrado' });
  }

  //crear nuevo usuario
  usuario = new Usuario({ nombre, email, password, role: 'doctor' });

  //hashear password
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(password, salt);
  try {
    await usuario.save();
    //console.log(usuario);
    res.json({ msg: 'Usuario creado correctamente' });
  } catch (error) {
    console.log(error);
  }
};

exports.getMedicos = async (req, res, next) => {
  const usuario = await Usuario.find({ role: 'doctor' });

  try {
    res.status(200).json({
      usuario: { usuario },
    });
  } catch (error) {
    console.log(error);
    return next();
  }
};

// Actualiza un medico
exports.actualizarMedico = async (req, res, next) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer la información del medico
  const { nombre } = req.body;
  const nuevoDoctor = {};

  if (nombre) {
    nuevoDoctor.nombre = nombre;
  }

  try {
    //Revisar ID
    let medico = await Usuario.findById(req.params.id);
    //Si el medico existe o no
    if (!medico) {
      return res.status(404).json({ msg: 'Medico no encontrado' });
    }
    //Actualizar
    medico = await Usuario.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoDoctor },
      {
        new: true,
      }
    );
    res.json({ medico });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};

exports.eliminarMedico = async (req, res, next) => {
  try {
    //Revisar ID
    let medico = await Usuario.findById(req.params.id);
    //Si el medico existe o no
    if (!medico) {
      return res.status(404).json({ msg: 'Doctor no encontrado' });
    }
    //actualizar
    await Usuario.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Doctor eliminado' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
};
