const BaseModel = require('./BaseModel');

class IdeaModel extends BaseModel {

  queryFields;

  constructor({ fields }) {
    super('ideas')

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(','));

  }


  //si la query est vide, on affiche toutes les idees, sinon uniquement les donnes pour la card
  init(fields) {
    if (!fields) {
      this.fields.push('*')
    } else {
      this.queryFields = fields
      // id,title,categories,locations,status

      if (this.queryFields.includes('id')) {
        this.fields.push(`ideas.id`)
      }
      if (this.queryFields.includes('title')) {
        this.fields.push(`ideas.title`)
      }
      if (this.queryFields.includes('deadline')) {
        this.fields.push(`ideas.deadline`)
      }
      if (this.queryFields.includes('detail')) {
        this.fields.push(`ideas.detail`)
      }
      if (this.queryFields.includes('risk')) {
        this.fields.push(`ideas.risk`)
      }
      if (this.queryFields.includes('benefit')) {
        this.fields.push(`ideas.benefit`)
      }
      if (this.queryFields.includes('impact')) {
        this.fields.push(`ideas.impact`)
      }
      if (this.queryFields.includes('users')) {
        this.fields.push(`users.id AS user_id`)
        this.fields.push(`users.firstname`)
        this.fields.push(`users.lastname`)
        this.fields.push(`users.picture`)
        this.fields.push(`users_has_ideas.is_owner`)
        this.fields.push(`roles.label AS role`)
      }
      if (this.queryFields.includes('comments')) {
        this.fields.push(`comments.content AS comment`)
      }
      if (this.queryFields.includes('categories')) {
        this.fields.push(`categories.label AS category`)
      }
      if (this.queryFields.includes('locations')) {
        this.fields.push(`locations.city`)
      }
      if (this.queryFields.includes('status')) {
        this.fields.push(`status.label AS status`)
        this.fields.push(`status.delay`)
      }
      this.join.push(`LEFT JOIN ideas_has_categories ON ideas.id = ideas_has_categories.id_idea
        LEFT JOIN categories ON ideas_has_categories.id_category = categories.id
        LEFT JOIN ideas_has_locations ON ideas.id = ideas_has_locations.id_idea
        LEFT JOIN locations ON ideas_has_locations.id_location = locations.id
        LEFT JOIN status ON ideas.id_status = status.id 
        LEFT JOIN comments ON comments.id_idea = ideas.id
        LEFT JOIN users_has_ideas ON ideas.id = users_has_ideas.id_idea
        LEFT JOIN users ON users_has_ideas.id_user = users.id
        LEFT JOIN roles ON users.id_role = roles.id
        `)
    }
  }

}


module.exports = IdeaModel


