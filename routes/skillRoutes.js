const express = require("express");
const skillControllers = require("../controllers/skillControllers");

const route = express.Router();

route.get("/", skillControllers.fetchAll);
route.post("/add", skillControllers.save);
route.put("/update/:id", skillControllers.update);
route.delete("/delete/:id", skillControllers.delete);

module.exports = route;
