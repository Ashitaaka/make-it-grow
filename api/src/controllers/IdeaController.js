const BaseController = require('./BaseController');
const { IdeaModel } = require('../models');
class IdeaController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new IdeaModel(req.query);
  }
  async getById() {
    const [results] = await this.model.getById(this.req.params.id);
    console.log(results);
    this.sendJson(
      results.reduce(
        (
          acc,
          {
            categories,
            city,
            color,
            delay,
            id,
            status,
            title,
            detail,
            impact,
            risk,
            benefit,
            comment,
            id_user,
            ...user
          }
        ) => {
          const allComments = acc.comment;
          const allCategories = acc.categories;
          const allUsers = acc.users;
          const allIdUsers = acc.id_user;

          if (!allCategories.includes(categories)) {
            allCategories.push(categories);
          }
          if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
            allUsers.push(user);
          }
          if (!allComments.includes(comment)) {
            allComments.push(comment);
          }
          if (!allIdUsers.includes(id_user)) {
            allIdUsers.push(id_user);
          }
          return {
            categories: allCategories,
            city,
            color,
            delay,
            id,
            status,
            title,
            detail,
            impact,
            risk,
            benefit,
            comment: allComments,
            id_user: allIdUsers,
            users: allUsers,
          };
        },
        { categories: [], users: [], comment: [], id_user: [] }
      )
    );
  }

  postItem() {
    this.model
      .postItem(this.req.body)
      .then((result) => {
        console.log('lalalala');
        this.res.status(201).json({ id: result.insertId, ...this.req.body });
      })
      .catch((error) => {
        console.error(error);
        this.res.status(500).json({ error: 'An error occurred' });
      });
  }
}
module.exports = IdeaController;
