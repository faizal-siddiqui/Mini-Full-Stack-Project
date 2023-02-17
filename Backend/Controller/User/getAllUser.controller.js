const { userModel } = require("../../Model/User.Model");

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports = {
  getAllUser,
};
