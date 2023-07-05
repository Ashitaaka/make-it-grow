const { Router } = require('express')
const { CategoryController } = require('../controllers')

const categoryRouter = Router();

categoryRouter.get("", (req, res) => new CategoryController(req, res).getAll())

module.exports = categoryRouter;