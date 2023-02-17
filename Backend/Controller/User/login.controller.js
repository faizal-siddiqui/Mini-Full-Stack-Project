const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { userId } = req.body;
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      userId: userId,
    },
    process.env.TOKEN
  );
  res.send({ msg: "Login SuccessFul", token: token });
};

module.exports = {
  login,
};
