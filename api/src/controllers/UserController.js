const BaseController = require("./BaseController");
const { UserModel } = require("../models");
const userFormat = require("../utils/userFormat");

class UserController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new UserModel(req.query);
  }

  getAll() {
    this.model.getAll().then(([users]) => {
      this.res.users = users;
      this.next();
    });
  }

  getById() {
    this.model.getById(this.req.params.id).then(([user]) => {
      this.res.users = user;
      this.next();
    });
  }

  async getByCity() {
    const [results] = await this.model.getByCity(this.req.params.city);
    this.next(results);
    this.sendJson(
      results.reduce((acc, cur) => {
        const foundUser = acc.find((el) => el.user_id === cur.user_id);
        if (!foundUser) {
          acc.push(
            userFormat(results.filter((el) => el.user_id === cur.user_id))
          );
          return acc;
        }
        return acc;
      }, [])
    );
  }

  getByEmailWithPass() {
    this.model.getByEmailWithPass(this.req.body.email).then(([[user]]) => {
      this.req.user = user;
    });
  }
}

module.exports = UserController;
