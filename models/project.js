const pool = require("../util/database");

class Project {
  constructor(projectId, projectTitle, projectContext, projectImage) {
    this.projectId = projectId;
    this.projectTitle = projectTitle;
    this.projectContext = projectContext;
    this.projectImage = projectImage;
  }
  save() {
    return pool.execute(
      "INSERT INTO projects (projectId, projectTitle, projectContext, projectImage) VALUES (?,?,?,?)",
      [
        this.projectId,
        this.projectTitle,
        this.projectContext,
        this.projectImage,
      ]
    );
  }
  static fetchAll() {
    return pool.execute("SELECT * FROM projects");
  }
  static findOne(id) {
    return pool.execute("SELECT * FROM projects WHERE projectId = ?", [id]);
  }
  static update(id, project) {
    const { projectTitle, projectContext, projectImage } = project;
    return pool.execute(
      "UPDATE projects set projectTitle = ? projectContext = ? projectImage = ? WHERE projectId = ?",
      [projectTitle, projectContext, projectImage, id]
    );
  }
  static delete(id) {
    return pool.execute("DELETE FROM projects WHERE projectId = ?", [id]);
  }
}
module.exports = Project;
