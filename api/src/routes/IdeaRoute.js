const { Router } = require('express')
const { IdeaController } = require('../controllers')

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req,res).getAll())
ideaRouter.get("/test", (req, res) => new IdeaController(req,res).getCardHeader())
ideaRouter.get("/test/:id", (req, res) => new IdeaController(req,res).getById())

module.exports = ideaRouter;