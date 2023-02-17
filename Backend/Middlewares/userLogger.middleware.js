const fs = require("fs");
const { userModel } = require("../Model/User.Model");

async function userLogger(req, res, next) {
  const { username, password, userId, role } = req.body;
  fs.appendFileSync(
    "./logs.txt",
    `UserName: ${username} | Role: ${role}\n`,
    "utf-8"
  );
  next();
}

module.exports = {
  userLogger,
};
