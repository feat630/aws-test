const mariadb = require('mariadb');
const connection = mariadb.createPool({
    host: "???",
    port: 1,
    user: "???",
    password: "???",
    database: "???",
  });
  
  module.exports = connection;