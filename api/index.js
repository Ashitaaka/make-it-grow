require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.APP_PORT || 8080
app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res){

    const { version } = require('./package.json');
    return res.json({ version })

}) // create route to get the package.json version

app.use('/api', APIRouter);

app.listen(port, function() {
    console.log(`API is running on port ${port}`)
});