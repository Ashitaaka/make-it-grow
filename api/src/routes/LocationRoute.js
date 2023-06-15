const { Router } = require('express');
const { LocationController } = require('../controllers');

const locationRouter = Router();

//ROUTES LIEUX
locationRouter.get("", (req, res) => new LocationController(req, res).getAll())

module.exports = locationRouter
