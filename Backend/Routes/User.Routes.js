const express = require("express");
const { userModel } = require("../Model/User.Model");
const jwt = require("jsonwebtoken");
const { Authenticator } = require("../Middlewares/Authenticator.middleware");
const { Validator } = require("../Middlewares/Validator.middleware");
const { register } = require("../Controller/User/register.controller");
const { login } = require("../Controller/User/login.controller");
const { getAllUser } = require("../Controller/User/getAllUser.controller");
const { getSingeUser } = require("../Controller/User/getSingleUser.controller");
const { updateUser } = require("../Controller/User/updateUser.controller");
const { deleteUser } = require("../Controller/User/deleteUser.controller");
const { userLogger } = require("../Middlewares/userLogger.middleware");
const { verifyToken } = require("../Middlewares/verifyToken.middleware");
const {
  checkHashPassword,
} = require("../Middlewares/checkHashPassword.middleware");

const userRouter = express.Router();

// SIGNUP
userRouter.post("/register", register);
// LOGIN
userRouter.post(
  "/login",
  [Authenticator, checkHashPassword, userLogger],
  login
);
// GET ALL USERS
userRouter.get("/", verifyToken, getAllUser);
// GET Single USERS
userRouter.get("/:id", verifyToken, getSingeUser);
// PATCH Single USERS
userRouter.patch("/:id", [verifyToken, Validator], updateUser);
// DELETE Single USERS
userRouter.delete("/:id", [verifyToken, Validator], deleteUser);

module.exports = {
  userRouter,
};
