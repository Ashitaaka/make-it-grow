const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

    constructor(){

        super('users')

    }

}

module.exports = UserModel;