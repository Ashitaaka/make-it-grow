require("dotenv").config();
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const port = process.env.APP_PORT ?? 5002;
const APIRouter = express.Router();


const { userRouter, ideaRouter, locationRouter, categoryRouter } = require('./src/routes');

//resolving cors issue from fetching from diffrent origins
const cors = require("cors");
const { optional } = require("joi");
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());


app.use('/api', APIRouter);

APIRouter.get('/version', function (req, res) {

  const { version } = require('./package.json');
  return res.json({ version })

}) // create route to get the package.json version

APIRouter.use('/users', userRouter)
APIRouter.use('/ideas', ideaRouter)
APIRouter.use('/locations', locationRouter)
APIRouter.use('/categories', categoryRouter)


app.listen(port, function () {
  console.log(`API is running on port ${port}`);
});
