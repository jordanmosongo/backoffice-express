const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const skillRoutes = require("./routes/skillRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(skillRoutes);

app.listen(3200, () => {
  console.log("A l'ecoute du port 3200");
});
