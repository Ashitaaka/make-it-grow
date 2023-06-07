const BaseModel = require('./BaseModel');

class IdeaModel extends BaseModel {

    constructor(){

        super('ideas')

        this.fieldsGetAll = {

            fields: [
                `ideas.id`,
                `ideas.title`,
                `is_closed`,
                `is_rejected`,
            ]

        }
    }

}

module.exports = IdeaModel