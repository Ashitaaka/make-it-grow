const { Router } = require('express');
const { UserController } = require('../controllers');
const { ifUserAlreadyExists, hashedPassword, hidePassword } = require('../middleware/index')

const userRouter = Router();

//ROUTES USERS
userRouter.get("", (req, res, next) => new UserController(req, res, next).getAll(), hidePassword)
userRouter.get("/:id", (req, res, next) => new UserController(req, res, next).getById(), hidePassword)

userRouter.post("", ifUserAlreadyExists, hashedPassword, (req, res) => new UserController(req, res).postItem())



module.exports = userRouter;