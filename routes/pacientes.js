const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check(
      "password",
      "El password debe contar con al menos 6 caracteres"
    ).isLength({
      min: 6,
    }),
  ],

  pacienteController.nuevoPaciente
);

module.exports = router;
