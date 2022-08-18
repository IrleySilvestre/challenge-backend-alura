const Movimentacoes = require("../model/movimentacaoModel");

exports.listAll = (req, res) => {
  const { descricao } = req.params;
  Movimentacoes.listAll(descricao, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};

exports.listReceitas = (req, res) => {
  const { descricao } = req.params;
  Movimentacoes.listReceitas(descricao, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.listReceitasMes = (req, res) => {
  const { mes } = req.params;
  const { ano } = req.params;
  Movimentacoes.listDespesasMes(ano, mes, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};

exports.listDespesas = (req, res) => {
  const { descricao } = req.params;
  Movimentacoes.listDespesas(descricao, (error, data) => {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
};
exports.listDepesasMes = (req, res) => {
  const { mes } = req.params;
  const { ano } = req.params;
  Movimentacoes.listDespesasMes(ano, mes, (error, data) => {
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

exports.addReceita = (req, res) => {
  const movimentacao = req.body;
  movimentacao.tipo = 1;
  if (movimentacao.categoria_id) {
    Movimentacoes.add(movimentacao, (error, data) => {
      if (error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    movimentacao.categoria_id = 8;
    Movimentacoes.add(movimentacao, (error, data) => {
      if (error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  }
};
exports.addDespesa = (req, res) => {
  const movimentacao = req.body;
  movimentacao.tipo = 2;
  if (movimentacao.categoria_id) {
    Movimentacoes.add(movimentacao, (error, data) => {
      if (error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    movimentacao.categoria_id = 8;
    Movimentacoes.add(movimentacao, (error, data) => {
      if (error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(200).json(data);
      }
    });
  }
};
