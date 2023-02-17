const bcrypt = require("bcrypt");
const { userModel } = require("../Model/User.Model");

const checkHashPassword = async (req, res, next) => {
  const { password, userId } = req.body; // get text password here

  try {
    // for getting hash Password
    const data = await userModel.findOne({ _id: userId });
    bcrypt.compare(password, data.password, function (err, result) {
      if (result) {
        next();
      } else {
        res.send({ err: "Server Error" });
      }
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  checkHashPassword,
};
