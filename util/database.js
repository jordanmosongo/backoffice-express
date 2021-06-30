const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  user: "root",
  database: "helloWorld",
  password: "",
});

module.exports = pool.promise();
