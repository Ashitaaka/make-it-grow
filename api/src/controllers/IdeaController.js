const BaseController = require("./BaseController");
const { IdeaModel } = require("../models");
const ideaFormat = require("../utils/ideaFormat");
class IdeaController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new IdeaModel(req.query);
  }

  async getAll() {
    const [results] = await this.model.getAll();
    this.sendJson(
      results.reduce((acc, cur) => {
        const foundIdea = acc.find((el) => el.idea_id === cur.idea_id);
        if (!foundIdea) {
          acc.push(
            ideaFormat(results.filter((el) => el.idea_id === cur.idea_id))
          );
          return acc;
        }
        return acc;
      }, [])
    );
  }

  async getById() {
    const [results] = await this.model.getById(this.req.params.id);
    this.sendJson(ideaFormat(results));
  }

  postItem() {
    this.model
      .postItem(this.req.body)
      .then((result) => {
        this.res.status(201).json({ id: result.insertId, ...this.req.body });
      })
      .catch((error) => {
        console.error(error);
        this.res.status(500).json({ error: "An error occurred" });
      });
  }
}
module.exports = IdeaController;
