const BaseModel = require('./BaseModel');

class IdeaModel extends BaseModel {

    constructor(){

        super('ideas')

        this.cardHeader= {

            fields: [
                `categories.label AS cat_label`,
                `ideas.id`,
                `ideas.title`,
                `locations.city`,
                `locations.region`,
                `locations.country`,
                `status.label`,
                `status.delay`
            ],

            join: [
                `LEFT JOIN ideas_has_categories ON ideas.id = ideas_has_categories.id_idea
                LEFT JOIN categories ON ideas_has_categories.id_category = categories.id
                LEFT JOIN ideas_has_locations ON ideas.id = ideas_has_locations .id_idea
                LEFT JOIN locations ON ideas_has_locations.id_location = locations.id
                LEFT JOIN status ON ideas.id_status = status.id`
            ]

        }
    }

}

module.exports = IdeaModel