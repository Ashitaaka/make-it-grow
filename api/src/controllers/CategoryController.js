const BaseController = require('./BaseController')
const { CategoryModel } = require('../models')

class CategoryController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new CategoryModel(req.query)

    }

}

module.exports = CategoryController;