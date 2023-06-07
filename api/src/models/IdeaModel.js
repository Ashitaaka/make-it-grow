const BaseModel = require('./BaseModel');

class IdeaModel extends BaseModel {

    queryFields;

    constructor({fields}){
        super('ideas')
        
        this.init(fields.split(','));

        // this.fields = [
        //         `categories.label AS category`,
        //         `ideas.id`,
        //         `ideas.title`,
        //         `locations.city`,
        //         `locations.region`,
        //         `locations.country`,
        //         `status.label AS status`,
        //         `status.delay`
        //     ]
        // this.join = [
        //     `LEFT JOIN ideas_has_categories ON ideas.id = ideas_has_categories.id_idea
        //     LEFT JOIN categories ON ideas_has_categories.id_category = categories.id
        //     LEFT JOIN ideas_has_locations ON ideas.id = ideas_has_locations .id_idea
        //     LEFT JOIN locations ON ideas_has_locations.id_location = locations.id
        //     LEFT JOIN status ON ideas.id_status = status.id`
        // ]
    }

    init(fields) {
        this.queryFields = fields

        console.log(this.queryFields);
        console.log(fields);
        // id,title,categories,locations,status
        if(this.queryFields.includes('id')) {
            this.fields.push(`ideas.id`)
        }
        if(this.queryFields.includes('title')) {
            this.fields.push(`ideas.title`)
        }
        if(this.queryFields.includes('status')) {
            this.fields.push(`status.label AS status_label`)
            this.fields.push(`status.delay AS status_delay`)

            this.join.push(`LEFT JOIN status ON ideas.id_status = status.id`)
        }


    }
    

}

module.exports = IdeaModel