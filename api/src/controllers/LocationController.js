const BaseController = require('./BaseController')
const { LocationModel } = require('../models')

class LocationController extends BaseController {

  constructor(req, res) {

    super(req, res)
    this.model = new LocationModel(req.query)

  }

}

module.exports = LocationController;