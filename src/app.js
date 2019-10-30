const express = require("express");
const app = express();

//rotas
const index = require("./routes/index");
const usuarios = require("./routes/usuariosRoute");

app.use("/", index);
app.use("/usuarios", usuarios);

module.exports = app;
