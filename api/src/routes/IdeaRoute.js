const { Router } = require('express')
const { IdeaController } = require('../controllers')

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req,res).getAll())
ideaRouter.get("/:id", (req, res) => new IdeaController(req,res).getById())

module.exports = ideaRouter;