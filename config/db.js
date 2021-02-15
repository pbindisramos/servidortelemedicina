const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("db conectada");
  } catch (error) {
    console.log("hubo un error");
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarDB;
