const { Router } = require("express");
const { CommentController } = require("../controllers");

const commentRouter = Router();

commentRouter.get("", (req, res) => new CommentController(req, res).getAll());
commentRouter.get("/:id", (req, res) => new CommentController(req, res).getById());

commentRouter.post("", (req, res) => new CommentController(req, res).postItem());



module.exports = commentRouter;
