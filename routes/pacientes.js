const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");

router.post("/", pacienteController.nuevoPaciente);

module.exports = router;
