const BaseController = require('./BaseController')
const { CommentModel } = require('../models')

class CommentController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new CommentModel(req.query)

    }

}

module.exports = CommentController;