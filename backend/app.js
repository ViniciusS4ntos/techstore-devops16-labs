require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

// Importando as dependências necessárias
const express = require("express");
const cors = require("cors");

// Criando uma instância do aplicativo Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota inicial da API
app.get("/", (req, res) => {
    res.status(200).json({
        status: "online",
        application: "TechStore API",
        version: "1.0.0"
    });
});

module.exports = app;