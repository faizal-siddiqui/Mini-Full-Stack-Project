const { userModel } = require("../../Model/User.Model");

const updateUser = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send({ msg: "Users Details Updated" });
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports = {
  updateUser,
};
