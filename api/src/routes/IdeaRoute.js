const { Router } = require('express')
const { IdeaController } = require('../controllers')

const ideaRouter = Router();

ideaRouter.get("", (req, res) => new IdeaController(req,res).getAll())
// ideaRouter.get("/header", (req, res) => new IdeaController(req,res).getIdeaHeader())
// ideaRouter.get("/header/:id", (req, res) => new IdeaController(req,res).getIdeaHeaderById())

module.exports = ideaRouter;