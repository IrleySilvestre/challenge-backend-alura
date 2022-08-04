const Movimentacoes = require("../model/movimentacaoModel");

exports.listAll = (req, res) => {
  const { tipo } = req.params;
  Movimentacoes.listAll(tipo, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.listById = (req, res) => {
  const { id } = req.params;
  Movimentacoes.listById(id, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const movimentacao = req.body;
  Movimentacoes.update([movimentacao, id], (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.remove = (req, res) => {
  const { id } = req.params;
  Movimentacoes.remove(id, (error, data) => {
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
  const movimentacao = req.body;
  Movimentacoes.add(movimentacao, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
