const BaseController = require('./BaseController')
const { VoteModel } = require('../models')

class VoteController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new VoteModel()

    }
    
      postItem() {
        this.model.postItem(this.req.body, this.req.params.user_id, this.req.params.ideas_id)
          .then(([result]) => {
            this.res.status(201).json({ id: result.insertId, ...this.req.body });
          })
          .catch((error) => {
            console.error(error);
            this.res.status(500).json({ error: "An error occurred" });
          });
      }
}

module.exports = VoteController