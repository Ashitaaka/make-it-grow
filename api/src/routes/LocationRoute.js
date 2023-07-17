const { Router } = require("express");
const { LocationController } = require("../controllers");

const locationRouter = Router();

//ROUTES LIEUX
locationRouter.get("", (req, res) => new LocationController(req, res).getAll());
locationRouter.post("", (req, res) =>
  new LocationController(req, res).postItem()
);

module.exports = locationRouter;
