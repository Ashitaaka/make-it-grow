const { Router } = require("express");
const { UserController } = require("../controllers");
const {
  ifUserAlreadyExists,
  hashedPassword,
  hidePassword,
  validateRequest,
  verifyPassword,
  tokenEmission,
  authorizationUser,
  authorizationAdmin,
} = require("../middleware/index");

const userRouter = Router();

//ROUTES USERS
userRouter.get(
  "",
  (req, res, next) => new UserController(req, res, next).getAll(),
  hidePassword
);
userRouter.get(
  "/:id",
  (req, res, next) => new UserController(req, res, next).getById(),
  hidePassword
);

userRouter.get(
  "/city/:city",
  (req, res, next) => new UserController(req, res, next).getByCity(),
  hidePassword
);

userRouter.post(
  "/register",
  ifUserAlreadyExists,
  validateRequest,
  hashedPassword,
  (req, res) => new UserController(req, res).postItem()
);

userRouter.post(
  "/login",
  (req, res, next) => new UserController(req, res, next).getByEmailWithPass(),
  verifyPassword,
  tokenEmission
);

userRouter.put("/:id", (req, res, next) =>
  new UserController(req, res, next).updateItem()
);

module.exports = userRouter;
