const BaseModel = require('./BaseModel');

class IdeaModel extends BaseModel {

    constructor(){

        super('ideas')

        this.fieldsGetAll = {

            fields: [
                `ideas.id`,
                `ideas.title`,
                `ideas.is_closed`,
                `ideas.is_rejected`,
                `status.label`,
                `status.delay`,
                `details.content`,
                `comments.content`,
                `benefits.content`,
                `risks.content`,
                `impacts.content`,
                `deadline.date`,
                `locations.city`,
                `locations.region`,
                `locations.country`,
                `categories.label`,
                `users.id`,
                `users.firstname`,
                `users.lastname`,
                `users.picture`,
                `role.label`
            ],

            join: []

        }
    }

}

module.exports = IdeaModel