const BaseController = require('./BaseController')
const { VoteModel } = require('../models')

class VoteController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new VoteModel(req.query)

    }
    getById() {
        this.model
          .getById(this.req.params.id)
          .then(([results]) => this.sendJson(results));
      }
    
      postItem() {
        this.model.postItem(this.req.body)
          .then(([result]) => {
            this.res.status(201).json({ id: result.insertId, ...this.req.body });
        });
      }
}

module.exports = VoteController