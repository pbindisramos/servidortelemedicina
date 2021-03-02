const Appointment = require('../models/Horas');
const Slot = require('../models/Horas');

exports.crearAgenda = async (req, res, next) => {
  var requestBody = req.body;
  console.log(requestBody);

  var newslot = new Slot({
    slot_time: requestBody.slot_time,
    slot_date: requestBody.slot_date,
    created_at: Date.now(),
  });
  newslot.save();
  // Creates a new record from a submitted form
  var newappointment = new Appointment({
    name: requestBody.name,
    email: requestBody.email,
    phone: requestBody.phone,
    slots: newslot._id,
  });

  newappointment.save();
};
