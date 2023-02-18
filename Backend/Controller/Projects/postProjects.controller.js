const { ProjectModel } = require("../../Model/Project.model");

const postProjects = async (req, res) => {
  const body = req.body;
  try {
    const data = new ProjectModel(body);
    await data.save();
    res.send({ msg: "Data Added" });
  } catch (err) {
    res.statusCode(500).send({ err: err.message });
  }
};

module.exports = {
  postProjects,
};
