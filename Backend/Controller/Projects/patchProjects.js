const { ProjectModel } = require("../../Model/Project.model");

const patchProjects = async (req, res) => {
  const ID = req.params.id;
  const body = req.body;
  console.log(body);
  try {
    await ProjectModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "Data Updated" });
  } catch (err) {
    res.statusCode(500).send({ err: err.message });
  }
};

module.exports = {
  patchProjects,
};
