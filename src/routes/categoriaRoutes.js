const {
  listAll,
  add,
  listById,
  remove,
  update,
} = require("../controller/categoriaController");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/:descricao?", listAll);
  router.get("/detalhe/:id", listById);
  router.post("/", add);
  router.post("/:id", remove);
  router.patch("/:id", update);

  app.use("/categoria", router);
};
