const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.TOKEN, (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.statusCode(500).send({ msg: "Session Expired Login Again" });
      }
    });
  } else {
    res.send({ msg: "Login First" });
  }
};

module.exports = {
  verifyToken,
};
