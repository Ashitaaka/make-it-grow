const BaseController = require('./BaseController')
const { IdeaModel } = require('../models')

class IdeaController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new IdeaModel(req.query)

    }

    getIdeaHeader(){
        this.model.getIdeaHeader()
        .then(([results]) => this.sendJson(results))
    }
    

}

module.exports = IdeaController;