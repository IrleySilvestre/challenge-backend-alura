const mysql = require("mysql");
const { dbConfig } = require("../../.env");

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
