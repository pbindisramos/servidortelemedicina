const express = require("express");
const conectarDB = require("./config/db");

//crear servidor
const app = express();

//conectar base de datos
conectarDB();

console.log("comenzando");

//puerto de la APP
const port = process.env.PORT || 4000;

//habilitar leer valores
app.use(express.json());

//rutas de la app

app.use("/api/pacientes", require("./routes/pacientes"));
app.use("/api/auth", require("./routes/auth"));
//Arrancar App
app.listen(port, "0.0.0.0", () => {
  console.log(`el servidor esta funcionando en el puerto ${port}`);
});
