const express = require("express");
const { connection } = require("./Configs/db");

require("dotenv").config();

const app = express();
app.use(express.json());
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
