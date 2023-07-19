const BaseModel = require("./BaseModel");

class VoteModel extends BaseModel {
    constructor() {
        super("users_has_ideas")
      }

      postItem(reqBody, user_id, idea_id) {
    
        return this.db.query(`INSERT INTO ${this.table} (vote_value, id_user, id_idea) VALUES (?,?,?)`, [reqBody.vote_value, user_id, idea_id]);
      }
}

module.exports = VoteModel