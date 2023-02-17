const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  dob: { type: String, required: false },
  location: { type: String, required: false },
});

const userModel = mongoose.model("user", userSchema); // capital letter

module.exports = {
  userModel,
};
