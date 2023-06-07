const BaseController = require('./BaseController')
const { IdeaModel } = require('../models')

class IdeaController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new IdeaModel()

    }

    getCardHeader(){
        this.model.getCardHeader()
        .then(([results]) => this.sendJson(results))
    }
    

}

module.exports = IdeaController;