const { ProjectModel } = require("../../Model/Project.model");

const getProjects = async (req, res) => {
  try {
    const data = await ProjectModel.find();
    res.send(data);
  } catch (err) {
    res.statusCode(500).send({ err: err.message });
  }
};

module.exports = {
  getProjects,
};
