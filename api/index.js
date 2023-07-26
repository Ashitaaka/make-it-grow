require("dotenv").config({ path: path.join(__dirname, ".env") });
const cron = require("./src/utils/Cron");
const path = require("path");

//Launching setIntervall to auto change status regarding the deadlines
cron();

//import cookie parser
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const port = process.env.APP_PORT ?? 5002;
const APIRouter = express.Router();

// Serve the 'public' folder for public resources
APIRouter.use("/public", express.static(path.join(__dirname, "./public")));

const {
  userRouter,
  ideaRouter,
  locationRouter,
  categoryRouter,
  commentRouter,
} = require("./src/routes");

const { optional } = require("joi");

app.use(cookieParser());
app.use(express.json());

app.use("/api", APIRouter);

APIRouter.get("/version", function (req, res) {
  const { version } = require("./package.json");
  return res.json({ version });
}); // create route to get the package.json version

APIRouter.use("/users", userRouter);
APIRouter.use("/ideas", ideaRouter);
APIRouter.use("/locations", locationRouter);
APIRouter.use("/categories", categoryRouter);
APIRouter.use("/comments", commentRouter);

app.listen(port, function () {
  `API is running on port ${port}`;
});
