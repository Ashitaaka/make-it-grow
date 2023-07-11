const BaseModel = require('./BaseModel');

class CommentModel extends BaseModel {

  constructor({ fields }) {
    super('comments')

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(','));

  }

  init(fields) {
    this.fields.push('*')
  }
}

module.exports = CommentModel;