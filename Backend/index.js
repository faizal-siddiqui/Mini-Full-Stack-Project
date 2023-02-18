const express = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/User.Routes");
const cors = require("cors");
const { projectRouter } = require("./Routes/Project.Routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/projects", projectRouter);
// console.log(process.env.PORT);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
  } catch (err) {
    console.log("Database Not Connected");
  }
  console.log(`Server is running at PORT ${process.env.PORT}`);
});
