const BaseController = require('./BaseController')
const { IdeaModel } = require('../models')

class IdeaController extends BaseController {

    constructor(req, res){

        super(req, res)
        this.model = new IdeaModel(req.query)

    }

    postItem() {
        this.model.postItem(this.req.body)
          .then((result) => {
            console.log("lalalala")
            this.res.status(201).json({ id: result.insertId, ...this.req.body });
          })
          .catch((error) => {
            console.error(error);
            this.res.status(500).json({ error: "An error occurred" });
          });
      }
    

}

module.exports = IdeaController;