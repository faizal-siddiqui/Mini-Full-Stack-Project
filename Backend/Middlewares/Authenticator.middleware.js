const { userModel } = require("../Model/User.Model");

async function Authenticator(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await userModel.find({ username });
    if (user.length > 0) {
      req.body.userId = user[0]._id;
      req.body.role = user[0].role;
      next();
    } else {
      res.send({ msg: "Session Time Out Login Again" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
}

module.exports = { Authenticator };
