const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
  dia: [
    {
      type: Number,
      required: true,
    },
  ],
  // activo: {
  //   type: Boolean,
  //   required: true,
  // },
  // manana_comienzo: {
  //   type: Number,
  //   required: true,
  // },
  // manana_fin: {
  //   type: Number,
  //   required: true,
  // },
  // tarde_comienzo: {
  //   type: Number,
  //   required: true,
  // },
  // tarde_fin: {
  //   type: Number,
  //   required: true,
  // },
  // doctor: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Usuario',
  // },
});

module.exports = mongoose.model('Agenda', agendaSchema);

// const appointmentSchema = new Schema({
//   name: String,
//   email: String,
//   phone: Number,
//   slots: { type: Schema.Types.ObjectId, ref: 'Slot' },
//   created_at: Date,
// });
// module.exports = mongoose.model('Appointment', appointmentSchema);
