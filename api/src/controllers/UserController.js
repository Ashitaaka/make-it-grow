const BaseController = require('./BaseController')
const { UserModel } = require('../models')

class UserController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new UserModel()
    }

}

module.exports = UserController;
