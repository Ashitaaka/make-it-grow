const BaseController = require('./BaseController');
const { IdeaModel } = require('../models');

class IdeaController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new IdeaModel(req.query);
  }

  async getById() {
    const [results] = await this.model.getById(this.req.params.id);
    console.clear();
    this.sendJson(
      results.reduce(
        (
          acc,
          { categories, city, color, delay, id, status, title, ...user }
        ) => {
          const allCategories = acc.categories;
          const allUsers = acc.users;
          if (!allCategories.includes(categories)) {
            allCategories.push(categories);
          }
          if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
            allUsers.push(user);
          }
          return {
            categories: allCategories,
            city,
            color,
            delay,
            id,
            status,
            title,
            users: allUsers,
          };
        },
        { categories: [], users: [] }
      )
    );
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
