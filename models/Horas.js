const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slot_time: String,
  slot_date: String,
  created_at: Date,
});

module.exports = mongoose.model('Slot', slotSchema);

const appointmentSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  slots: { type: Schema.Types.ObjectId, ref: 'Slot' },
  created_at: Date,
});
module.exports = mongoose.model('Appointment', appointmentSchema);
