const mariadb = require('mariadb');
const connection = mariadb.createPool({
    host: "???",
    port: 1421321,
    user: "???",
    password: "???",
    database: "???",
  });
  
  module.exports = connection;