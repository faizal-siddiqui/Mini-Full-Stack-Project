const { userModel } = require("../../Model/User.Model");

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ msg: "Users Details Deleted" });
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports = {
  deleteUser,
};
