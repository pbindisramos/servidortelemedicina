const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
  dias: [
    {
      dia: {
        type: String,
        required: true,
      },

      activo: {
        type: Boolean,
      },

      manana_comienzo: {
        type: Object,
      },
      manana_fin: {
        type: Object,
      },
      tarde_comienzo: {
        type: Object,
      },
      tarde_fin: {
        type: Object,
      },
    },
  ],
});
// },
// doctor: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Usuario',
// }

module.exports = mongoose.model('Agenda', agendaSchema);

// const appointmentSchema = new Schema({
//   name: String,
//   email: String,
//   phone: Number,
//   slots: { type: Schema.Types.ObjectId, ref: 'Slot' },
//   created_at: Date,
// });
// module.exports = mongoose.model('Appointment', appointmentSchema);
