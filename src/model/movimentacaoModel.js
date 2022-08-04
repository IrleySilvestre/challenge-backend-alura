const connection = require("../config/db");

class Movimentacoes {
  constructor(movimentacoes) {
    this.descricao = movimentacoes.descricao;
    this.valor = movimentacoes.valor;
    this.data = movimentacoes.data;
    this.tipo = movimentacoes.tipo;
  }

  static listAll(tipo, result) {
    if (tipo) {
      var sql = "SELECT * FROM movimentacoes WHERE tipo = ?";
    } else {
      var sql = "SELECT * FROM movimentacoes";
    }

    connection.query(sql, tipo, (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }

  static listById(id, result) {
    const sql = "SELECT * FROM movimentacoes WHERE id = ?";
    connection.query(sql, id, (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }
  static update([movimentacao, id], result) {
    const sql = "UPDATE movimentacoes SET ? WHERE id = ?";
    connection.query(sql, [movimentacao, id], (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }
  static remove(id, result) {
    const sql = "DELETE FROM movimentacoes WHERE id = ?";
    connection.query(sql, id, (error, results) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }

  static add(movimentacao, result) {
    const sql = "INSERT INTO movimentacoes SET ?";

    connection.query(sql, movimentacao, (error, res) => {
      if (error) {
        result(error, null);
      } else {
        result(null, { id: result.isertId, ...movimentacao });
      }
    });
  }
}
module.exports = Movimentacoes;
