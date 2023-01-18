const mariadb = require('mariadb');
const connection = mariadb.createPool({
    host: "???",
    port: 1423213211321,
    user: "???",
    password: "???",
    database: "???",
  });
  
  module.exports = connection;