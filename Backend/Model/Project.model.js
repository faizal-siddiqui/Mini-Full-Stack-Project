const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  name: String,
  owner: String,
  like_count: Number,
  role: String,
  packages: Array,
  screenshots: Array,
});

const ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = {
  ProjectModel,
};
