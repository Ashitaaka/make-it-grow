const { Router } = require('express');
const { UserController } = require('../controllers');
const { ifUserAlreadyExists, validateRequest } = require('../middleware/index')

const userRouter = Router();

//ROUTES USERS
userRouter.get("", (req, res) => new UserController(req, res).getAll())
userRouter.get("/:id", (req, res) => new UserController(req, res).getById())

userRouter.post("/register", ifUserAlreadyExists, validateRequest, (req, res) => new UserController(req, res).postItem())



module.exports = userRouter;