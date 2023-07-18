const BaseModel = require("./BaseModel");

class VoteModel extends BaseModel {
    constructor({fields}) {
        super('users_has_ideas')

        //securisation si fields vide et split de la chaine issue de la query
        this.init(fields && fields.split(","));
    
      }
      init(fields) {
        if (!fields) {
          this.fields.push("*");
        }
      } 
    
}

module.exports = VoteModel