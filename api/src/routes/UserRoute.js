const { Router } = require("express");
const { UserController, VoteController } = require("../controllers");
const {
  ifUserAlreadyExists,
  hashedPassword,
  hidePassword,
  validateRequest,
  verifyPassword,
  tokenEmission,
  authorizationUser,
  authorizationAdmin,
  checkIfThereIsFile,
  renameFile,
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

userRouter.get("/city/:city", (req, res) =>
  new UserController(req, res).getByCity()
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

userRouter.post("/:user_id/ideas/:ideas_id/votes", (req, res, next) =>
  new VoteController(req, res, next).postItem()
);

userRouter.put("/:id", checkIfThereIsFile, renameFile, (req, res, next) =>
  new UserController(req, res, next).updateItem()
);

userRouter.delete("/:id", (req, res) =>
  new UserController(req, res).deleteItem()
);

module.exports = userRouter;
