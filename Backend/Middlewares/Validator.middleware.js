const { userModel } = require("../Model/User.Model");

async function Validator(req, res, next) {
  const ID = req.body.userId;
  delete req.body.userId;
  try {
    const data = await userModel.findOne({ _id: ID });

    if (data.role === "admin") {
      next();
    } else {
      res.send({ msg: "Only Admin is allowed to perform this operation" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
}

module.exports = {
  Validator,
};
