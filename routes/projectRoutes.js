const express = require("express");
const projectControllers = require("../controllers/projectControllers");

const route = express.Router();

route.get("/project", projectControllers.fetchAll);
route.get("/project/:id", projectControllers.findOne);
route.post("/project/add", projectControllers.save);

module.exports = route;
