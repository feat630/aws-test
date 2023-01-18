const mariadb = require('mariadb');
const connection = mariadb.createPool({
    host: "???",
    port: 1234,
    user: "???",
    password: "???",
    database: "???",
  });
  
  module.exports = connection;