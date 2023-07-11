require('dotenv').config();
const path = require('path')

//import cookie parser 
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
const port = process.env.APP_PORT ?? 5002;
const APIRouter = express.Router();

// Serve the 'public' folder for public resources
APIRouter.use('/public',  express.static(path.join(__dirname, "./public")));

const {
  userRouter,
  ideaRouter,
  locationRouter,
  categoryRouter,
} = require('./src/routes');

const { optional } = require('joi');

app.use(cookieParser());
app.use(express.json());

app.use('/api', APIRouter);

APIRouter.get('/version', function (req, res) {
  const { version } = require('./package.json');
  return res.json({ version });
}); // create route to get the package.json version

APIRouter.use('/users', userRouter);
APIRouter.use('/ideas', ideaRouter);
APIRouter.use('/locations', locationRouter);
APIRouter.use('/categories', categoryRouter);

app.listen(port, function () {
  `API is running on port ${port}`;
});
