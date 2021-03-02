const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/', auth.jwt, auth.isDoctor);

module.exports = router;
