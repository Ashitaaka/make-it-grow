const { Router } = require('express')
const { IdeaController } = require('../controllers')

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req,res).getAll())
ideaRouter.get("/:id", (req, res) => new IdeaController(req,res).getById())
ideaRouter.get("/test", (req, res) => new IdeaController(req,res).getCardHeader())

module.exports = ideaRouter;