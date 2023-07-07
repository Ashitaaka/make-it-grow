const { Router } = require("express");
const { IdeaController } = require("../controllers");

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req, res).getAll());
ideaRouter.get("/:id", (req, res) => new IdeaController(req, res).getById());

ideaRouter.post("", (req, res) => new IdeaController(req, res).postItem());

ideaRouter.put("/:id", (req, res, next) =>
  new IdeaController(req, res, next).updateItem()
);

module.exports = ideaRouter;
