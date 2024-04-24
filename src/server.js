const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("../src/routes/userRoutes");
const PORT = 3000;
require("dotenv").config();

const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${dbHost}:${dbPassword}@cluster0.77xbloc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Conexão estabelecida com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar", error);
  });

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}`);
});
