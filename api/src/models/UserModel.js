const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

  queryFields;

  constructor({ fields }) {

    super('users')

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(','));

  }
  //si la query est vide, on affiche toutes les idees, sinon uniquement les donnes pour la card
  init(fields) {
    if (!fields) {
      this.fields.push('*')
    } else {
      this.queryFields = fields
      if (this.queryFields.includes('id')) {
        this.fields.push(`users.id`)
      }
      if (this.queryFields.includes('firstname')) {
        this.fields.push(`users.firstname`)
      }
      if (this.queryFields.includes('lastname')) {
        this.fields.push(`users.lastname`)
      }
      if (this.queryFields.includes('picture')) {
        this.fields.push(`users.picture`)
      }
      if (this.queryFields.includes('occupation')) {
        this.fields.push(`users.occupation`)
      }
      if (this.queryFields.includes('locations')) {
        this.fields.push(`locations.city`)
        this.fields.push('locations.country')
      }
      if (this.queryFields.includes('email')) {
        this.fields.push(`logins.email`)
      }

      this.join.push(`LEFT JOIN locations ON locations.id = users.id_location
      LEFT JOIN logins ON logins.id = users.id_login `)
    }
  }
}

module.exports = UserModel;