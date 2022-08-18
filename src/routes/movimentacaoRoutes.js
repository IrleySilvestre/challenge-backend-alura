const {
  listAll,
  listReceitas,
  listDespesas,
  listReceitasMes,
  listDepesasMes,
  addReceita,
  addDespesa,
  listById,
  remove,
  update,
} = require("../controller/movimentacaoController");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/", listAll);
  router.get("/receitas/:descricao?", listReceitas);
  router.get("/receitas/mensal/:ano/:mes", listReceitasMes);
  router.get("/despesas/:descricao?", listDespesas);
  router.get("/despesas/mensal/:ano/:mes", listDepesasMes);
  router.get("/detalhe/:id", listById);
  router.post("/receita", addReceita);
  router.post("/despesa", addDespesa);
  router.post("/:id", remove);
  router.patch("/:id", update);

  app.use("/movimentacao", router);
};
