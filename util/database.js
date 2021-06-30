const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  user: "root",
  database: "backoffice",
  password: "",
});

module.exports = pool.promise();
