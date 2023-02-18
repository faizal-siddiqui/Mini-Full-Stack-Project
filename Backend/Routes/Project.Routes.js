const express = require("express");
const {
  getProjects,
} = require("../Controller/Projects/getProjects.controller");
const { patchProjects } = require("../Controller/Projects/patchProjects");
const {
  postProjects,
} = require("../Controller/Projects/postProjects.controller");
const { verifyToken } = require("../Middlewares/verifyToken.middleware");
const { ProjectModel } = require("../Model/Project.model");

const projectRouter = express();

projectRouter.get("/", verifyToken, getProjects);

projectRouter.post("/", verifyToken, postProjects);

projectRouter.patch("/:id", verifyToken, patchProjects);

module.exports = {
  projectRouter,
};
