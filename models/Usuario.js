const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  // apellido: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // genero: {
  //   type: Boolean,
  //   required: true,
  //   default: true,
  // },
  // fechanacimiento: {
  //   type: Date,
  //   required: true,
  // },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    default: "paciente",
    enum: ["paciente", "doctor", "admin"],
  },
  accesToken: {
    type: String,
  },

  //   roles: [
  //     {
  //       ref: "Role",
  //       type: Schema.Types.ObjectId,
  //     },
  //   ],
});

module.exports = mongoose.model("Usuario", usuarioSchema);
