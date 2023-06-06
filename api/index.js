require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || 5002;
const APIRouter = express.Router();

//resolving cors issue from fetching from diffrent origins
const cors = require('cors');

const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

app.use(express.json());

APIRouter.get('/version', function(req, res){

    const { version } = require('./package.json');
    return res.json({ version })

}) // create route to get the package.json version

app.use('/api', APIRouter);

app.listen(port, function() {
    console.log(`API is running on port ${port}`)
});