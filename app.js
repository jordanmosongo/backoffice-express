const express = require("express");
const cors = require("cors");
const pool = require("./util/database");

const app = express();
app.use(cors);

pool
  .execute("SELECT * FROM skill")
  .then(([rows]) => {
    console.log(rows);
  })
  .catch((err) => console.log(err));

app.listen(3200, () => {
  console.log("A l'ecoute du port 3200");
});
