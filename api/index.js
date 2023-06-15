require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT ?? 5002;
const APIRouter = express.Router();

const { userRouter, ideaRouter, locationRouter } = require('./src/routes');

//resolving cors issue from fetching from diffrent origins
const cors = require('cors');
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', APIRouter);

APIRouter.get('/version', function (req, res) {

  const { version } = require('./package.json');
  return res.json({ version })

}) // create route to get the package.json version

APIRouter.use('/users', userRouter)
APIRouter.use('/ideas', ideaRouter)
APIRouter.use('/locations', locationRouter)













app.listen(port, function () {
  console.log(`API is running on port ${port}`)
});

