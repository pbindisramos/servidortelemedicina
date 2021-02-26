const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//const { check } = require("express-validator");
const auth = require("../middleware/auth");
//const verificarRoles = require("../middleware/verificarRoles");

router.post("/", authController.autenticarUsuario);
router.get("/", auth.jwt, authController.usuarioAutenticado);

module.exports = router;
