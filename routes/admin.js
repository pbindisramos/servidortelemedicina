const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const verificarRoles = require("../middleware/verificarRoles");

router.post("/", auth.jwt, auth.isAdmin, adminController.crearMedico);

module.exports = router;
