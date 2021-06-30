const pool = require("../util/database");

class Skill {
  constructor(skillId, skillName) {
    this.skillId = skillId;
    this.skillName = skillName;
  }
  save() {
    return pool.execute(
      "INSERT INTO  skills (skillId, nameSkill) VALUES (?, ?)",
      [this.skillId, this.skillName]
    );
  }
  static delete(id) {
    return pool.execute("DELETE FROM skills WHERE skillId = ? ", [id]);
  }
  static fetchAll() {
    return pool.execute("select * from skills");
  }
  static findOne(id) {
    return pool.execute("SELECT * FROM skills WHERE skillId = ?", [id]);
  }
  static update(id, skill) {
    const { skillName } = skill;
    return pool.execute(
      `update skills set  nameSkill = ${skillName} where skillId = ${id}`
    );
  }
}

module.exports = Skill;
