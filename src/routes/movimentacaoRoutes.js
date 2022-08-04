const {
  listAll,
  add,
  listById,
  remove,
  update,
} = require("../controller/movimentacaoController");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/:tipo?", listAll);
  router.get("/detalhe/:id", listById);
  router.post("/", add);
  router.post("/:id", remove);
  router.patch("/:id", update);

  app.use("/movimentacao", router);
};
