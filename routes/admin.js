const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const AgendaController = require('../controllers/agendaController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');
//const verificarRoles = require('../middleware/verificarRoles');

//crear Medicos
router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email válido').isEmail(),
    check(
      'password',
      'El password debe contar con al menos 6 caracteres'
    ).isLength({
      min: 6,
    }),
  ],
  auth.jwt,
  auth.isAdmin,
  doctorController.crearMedico
);
//obtener medicos
router.get('/', auth.jwt, auth.isAdmin, doctorController.getMedicos);
//editar medico
router.put('/:id', auth.jwt, auth.isAdmin, doctorController.actualizarMedico);
//eliminar medico
router.delete('/:id', auth.jwt, auth.isAdmin, doctorController.eliminarMedico);

//agendar horas
router.post(
  '/horasmedicas',
  auth.jwt,
  auth.isAdmin,
  AgendaController.crearAgenda
);

module.exports = router;
