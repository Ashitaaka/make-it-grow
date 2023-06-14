const { Router } = require('express');
const { UserController } = require('../controllers');
const { ifUserAlreadyExists } = require('../middleware/index')

const userRouter = Router();

//ROUTES USERS
userRouter.get("", (req, res) => new UserController(req, res).getAll())
userRouter.get("/:id", (req, res) => new UserController(req, res).getById())

userRouter.post("", ifUserAlreadyExists, (req, res) => new UserController(req, res).postItem())



module.exports = userRouter;