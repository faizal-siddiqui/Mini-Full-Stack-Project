const { userModel } = require("../../Model/User.Model");

const getSingeUser = async (req, res) => {
  try {
    const user = await userModel.find({ _id: req.params.id });
    res.send(user);
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports = {
  getSingeUser,
};
