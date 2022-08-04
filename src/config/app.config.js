const express = require("express");

const movimentacaoRoutes = require("../routes/movimentacaoRoutes");

module.exports = () => {
  const app = express();

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.status(200).send({ Msg: "Desafio Backend Alura" });
  });

  //**Incluir Rotas**//
  movimentacaoRoutes(app);

  return app;
};
