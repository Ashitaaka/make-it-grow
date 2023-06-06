const { Router } = require('express');
const { UserController } = require('../controllers');

const userRouter = Router();

userRouter.get("", (req, res) => new UserController(req,res).getAll())
userRouter.get("/:id", (req, res) => new UserController(req,res).getById())

module.exports = userRouter;

