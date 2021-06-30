const Skill = require("../models/skill");
const { v4: uuidv4 } = require("uuid");

exports.save = (req, res, next) => {
  const skill = new Skill(uuidv4(), "realisation des interfaces dynamiques");
  skill
    .save()
    .then((result) => {
      console.log(result);
      return res.status(200).json("skill saved successfully");
    })
    .catch((err) => console.log(err.message));
};
exports.fetchAll = (req, res, next) => {
  Skill.fetchAll()
    .then(([rows]) => {
      console.log(rows);
      return res.status(201).json(rows);
    })
    .catch((err) => console.log(err));
};
exports.findOne = (req, res, next) => {};
exports.update = (req, res, next) => {
  const id = req.params.id;
  Skill.update(id, req.body)
    .then(() => {
      return res.status(201).json("Updating done successfully !");
    })
    .catch((err) => console.log(err));
};
exports.delete = (req, res, next) => {
  const id = req.params.id;
  Skill.delete(id)
    .then(() => {
      return res.status(201).json("deleting successfully done !");
    })
    .catch((err) => console.log(err));
};
