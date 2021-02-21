const Role = require("../models/Role");

exports.createRoles = async () => {
  try {
    const contador = await Role.estimatedDocumentCount();

    if (contador > 0) return;
    const values = await Promise.all([
      new Role({ name: "paciente" }).save(),
      new Role({ name: "doctor" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
