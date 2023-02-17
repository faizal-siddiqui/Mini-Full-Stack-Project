const { userModel } = require("../../Model/User.Model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const userDetails = req.body;
  try {
    const existUser = await userModel.findOne({ email: userDetails.email });
    if (existUser) {
      res.send({ msg: "User already exists" });
    } else {
      bcrypt.hash(userDetails.password, 5, async (err, hash) => {
        // Store hash in your password DB.
        try {
          if (err) {
            res.send({ err: "Server Error" });
          } else {
            const newUser = new userModel({ ...userDetails, password: hash });
            await newUser.save();
            res.send({ msg: "Accounts Created" });
          }
        } catch (err) {
          res.send({ err: err.message });
        }
      });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
};

module.exports = {
  register,
};
