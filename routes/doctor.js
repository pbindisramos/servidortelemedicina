const express = require('express');
const router = express.Router();
const AgendaController = require('../controllers/agendaController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/', auth.jwt, auth.isDoctor, AgendaController.crearAgenda);

module.exports = router;
