const { Router } = require('express')
const { IdeaController } = require('../controllers')

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req, res).getAll())
ideaRouter.get("/:id", (req, res) => new IdeaController(req, res).getById())

ideaRouter.post("", (req, res) => new IdeaController(req, res).postItem());

module.exports = ideaRouter;