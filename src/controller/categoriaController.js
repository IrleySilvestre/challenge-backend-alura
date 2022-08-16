const Categorias = require("../model/categoriaModel");

exports.listAll = (req, res) => {
  const { descricao } = req.params;
  Categorias.listAll(descricao, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.listById = (req, res) => {
  const { id } = req.params;
  Categorias.listById(id, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const categoria = req.body;
  Categorias.update([categoria, id], (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.remove = (req, res) => {
  const { id } = req.params;
  Categorias.remove(id, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else if (data.affectedRows === 1) {
      res.status(200).json({ msg: "removido com sucesso" });
    } else {
      res.status(200).json({ msg: `Registro id: ${id} nao localizado` });
    }
  });
};

exports.add = (req, res) => {
  const categoria = req.body;
  Categorias.add(categoria, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
