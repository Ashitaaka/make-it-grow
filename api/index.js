const express = require('express');
const app = express();
app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res){

    const { version } = require('./package.json');
    return res.json({ version })

})// créer une route qui me donne la version  du package.json du back

app.use('/api', APIRouter);

app.listen(8080, function() {
    console.log(`API is running on port 8080`)
});