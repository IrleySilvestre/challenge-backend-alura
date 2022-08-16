const connection = require("../config/db");

class Categorias {
  constructor(categoria) {
    this.descricao = categoria.descricao;
  }

  static listAll(descricao, result) {
    if (descricao) {
      var sql = `SELECT * FROM categorias WHERE  descricao =  ? `;
    } else {
      var sql = "SELECT * FROM categorias";
    }
    console.log(sql);

    connection.query(sql, descricao, (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }

  static listById(id, result) {
    const sql = "SELECT * FROM categorias WHERE id = ?";
    connection.query(sql, id, (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }
  static update([categoria, id], result) {
    const sql = "UPDATE categorias SET ? WHERE id = ?";
    connection.query(sql, [categoria, id], (error, results, fields) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }
  static remove(id, result) {
    const sql = "DELETE FROM categorias WHERE id = ?";
    connection.query(sql, id, (error, results) => {
      if (error) {
        result(error, null);
        return;
      } else {
        result(null, results);
      }
    });
  }

  static add(categoria, result) {
    const sql = "INSERT INTO categorias SET ?";

    connection.query(sql, categoria, (error, res) => {
      if (error) {
        result(error, null);
      } else {
        result(null, { id: result.isertId, ...categoria });
      }
    });
  }
}
module.exports = Categorias;
