const connection = require("../config/db");

class Movimentacoes {
  constructor(movimentacoes) {
    this.descricao = movimentacoes.descricao;
    this.valor = movimentacoes.valor;
    this.data = movimentacoes.data;
    this.tipo = movimentacoes.tipo;
    this.categoria_id = movimentacoes.categoria_id;
  }

  static listAll(descricao, result) {
    if (!descricao) {
      const sql = "SELECT * FROM movimentacoes";
      connection.query(sql, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    } else {
      const sql = "SELECT * FROM movimentacoes WHERE descricao LIKE '%' ? '%'";
      connection.query(sql, descricao, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    }
  }

  static listReceitas(descricao, result) {
    if (descricao) {
      var sql =
        "SELECT * FROM movimentacoes WHERE tipo = 1 and descricao LIKE '%' ? '%'";
      connection.query(sql, descricao, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    } else {
      var sql = "SELECT * FROM movimentacoes WHERE tipo = 1 ";
      connection.query(sql, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    }
  }
  static listReceitasMes(ano, mes, result) {
    const dtInicio = `${ano}-${mes}-01 00:00:00`;
    const dtFim = `${ano}-${mes}-30 23:59:59`;
    console.log(dtInicio, dtFim);

    var sql =
      "SELECT * FROM movimentacoes WHERE tipo = 1 AND data >= ? AND data <= ?  ";
    connection.query(sql, [dtInicio, dtFim], (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }

  static listDespesas(descricao, result) {
    if (descricao) {
      var sql =
        "SELECT * FROM movimentacoes WHERE tipo = 2 AND descricao LIKE '%' ? '%'";
      connection.query(sql, descricao, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    } else {
      var sql = "SELECT * FROM movimentacoes WHERE tipo = 2 ";
      connection.query(sql, (error, results, fields) => {
        if (error) {
          result(error, null);
          return;
        } else {
          result(null, results);
        }
      });
    }
  }

  static listDespesasMes(ano, mes, result) {
    const dtInicio = `${ano}-${mes}-01 00:00:00`;
    const dtFim = `${ano}-${mes}-30 23:59:59`;
    console.log(dtInicio, dtFim);

    var sql =
      "SELECT * FROM movimentacoes WHERE tipo = 2 AND data >= ? AND data <= ?  ";
    connection.query(sql, [dtInicio, dtFim], (error, results, fields) => {
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
