const BaseController = require('./BaseController');
const { IdeaModel } = require('../models');

class IdeaController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new IdeaModel(req.query);
  }

  async getById() {
    const [results] = await this.model.getById(this.req.params.id);
    this.sendJson(
      results.reduce(
        (acc, { category, city, color, delay, id, status, title, ...user }) => {
          return {
            category,
            city,
            color,
            delay,
            id,
            status,
            title,
            users: [...(acc.users || []), user],
          };
        },
        {}
      )
    );
  }
}

module.exports = IdeaController;
