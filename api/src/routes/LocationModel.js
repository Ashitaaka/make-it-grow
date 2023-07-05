const BaseModel = require('../models/BaseModel');

class LocationModel extends BaseModel {

  constructor({ fields }) {
    super('locations')

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(','));

  }

  init(fields) {
    this.fields.push('*')
  }
}

module.exports = LocationModel;