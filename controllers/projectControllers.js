const Project = require("../models/project");
const { v4: uuid } = require("uuid");

exports.save = ({ body }, res, next) => {
  const { projectTitle, projectContext, projectImage } = body;
  const project = new Project(
    uuid(),
    projectTitle,
    projectContext,
    projectImage
  );
  project
    .save()
    .then(() => {
      return res.status(200).json("project saved successfully !");
    })
    .catch((err) => console.log(err));
};
exports.fetchAll = (req, res, next) => {
  Project.fetchAll()
    .then(([rows]) => {
      return res.status(201).json(rows);
    })
    .catch((err) => console.log(err));
};
exports.findOne = (req, res, next) => {
  const id = req.params.id;
  Project.findOne(id)
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => console.log(err));
};
exports.delete = (req, res, next) => {
  const id = req.params.id;
  Project.delete(id)
    .then(() => {
      return res.status(201).json("deletion done successfully !");
    })
    .catch((err) => console.log(err.message));
};
