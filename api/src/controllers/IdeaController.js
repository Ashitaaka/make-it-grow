const BaseController = require("./BaseController");
const { IdeaModel } = require("../models");
class IdeaController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new IdeaModel(req.query);
  }
  async getById() {
    const [results] = await this.model.getById(this.req.params.id);
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
            ...user
          }
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
            detail,
            impact,
            risk,
            benefit,
            users: allUsers,
          };
        },
        { categories: [], users: [] }
      )
    );
  }
  // async getAll() {
  //   const [results] = await this.model.getAll();
  //   console.clear();
  //   return this.sendJson(
  //     results.reduce((acc, current) => {
  //       const foundIdea = acc.find(({ id }) => id === current.id);
  //       if (!foundIdea.includes(ideas)) {
  //         foundIdea.push(ideas);
  //       }
  //     }, [])
  //   );
  //   this.sendJson(
  //     results.reduce(
  //       (
  //         acc,
  //         { categories, city, color, delay, id, status, title, ...user }
  //       ) => {
  //         const allCategories = acc.categories;
  //         const allUsers = acc.users;
  //         if (!allCategories.includes(categories)) {
  //           allCategories.push(categories);
  //         }
  //         if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
  //           allUsers.push(user);
  //         }
  //         return {
  //           categories: allCategories,
  //           city,
  //           color,
  //           delay,
  //           id,
  //           status,
  //           title,
  //           users: allUsers,
  //         };
  //       },
  //       { categories: [], users: [] }
  //     )
  //   );
  // }
}
module.exports = IdeaController;
