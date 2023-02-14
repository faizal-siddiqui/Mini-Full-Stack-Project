const express = require("express");
const { userModel } = require("../Model/User.Model");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

// SIGNUP
userRouter.post("/register", async (req, res) => {
  const userDetails = req.body;
  try {
    const newUser = new userModel(userDetails);
    await newUser.save();
    res.send({ msg: "Accounts Created" });
  } catch (err) {
    res.send({ err: err.message });
  }
});

// LOGIN
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await userModel.find({ email, password });
    if (data.length > 0) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
          data: "faizal",
        },
        "faizal"
      );
      res.send({ msg: "Accounts Created", token: token });
    } else {
      res.send({ msg: "Session Expired Login Again" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

// GET ALL USERS
userRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "faizal", async (err, decoded) => {
    try {
      if (decoded) {
        const users = await userModel.find();
        res.send(users);
      } else {
        res.send({ msg: "Session Expired Login Again" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  });
});

// GET Single USERS
userRouter.get("/:id", async (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "faizal", async (err, decoded) => {
    try {
      if (decoded) {
        const user = await userModel.find({ _id: req.params.id });
        res.send(user);
      } else {
        res.send({ msg: "Session Expired Login Again" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  });
});

// PATCH Single USERS
userRouter.patch("/:id", async (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "faizal", async (err, decoded) => {
    try {
      if (decoded) {
        await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.send("Users Details Updated");
      } else {
        res.send({ msg: "Session Expired Login Again" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  });
});

// DELETE Single USERS
userRouter.delete("/:id", async (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "faizal", async (err, decoded) => {
    try {
      if (decoded) {
        await userModel.findByIdAndDelete({ _id: req.params.id });
        res.send("Users Details Deleted");
      } else {
        res.send({ msg: "Session Expired Login Again" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  });
});
