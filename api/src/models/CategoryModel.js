const BaseModel = require('./BaseModel');

class CategoryModel extends BaseModel {

  queryFields;

  constructor({ fields }) {
    super('categories')

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(','));
  }


  //si la query est vide, on affiche toutes les idees, sinon uniquement les donnes pour la card
  init(fields) {
    if (!fields) {
      this.fields.push('*')
    } else {
      this.queryFields = fields
      if (this.queryFields.includes('label')) {
        this.fields.push(`categories.label`)
      }
      if (this.queryFields.includes('color')) {
        this.fields.push(`categories.color`)
      }
   }
  }

}


module.exports = CategoryModel