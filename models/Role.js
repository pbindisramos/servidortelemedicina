const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ROLES = ("paciente", "doctor", "admin");
const rolesSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", rolesSchema, ROLES);
