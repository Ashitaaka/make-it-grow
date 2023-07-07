const BaseController = require("./BaseController");
const { UserModel } = require("../models");
const ideaFormat = require("../utils/ideaFormat");

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

  getByCity() {
    this.model.getByCity(this.req.params.city).then(([user]) => {
      this.res.users = user;
      this.next();
    });
  }

  getByEmailWithPass() {
    this.model.getByEmailWithPass(this.req.body.email).then(([[user]]) => {
      this.req.user = user;
      this.next();
    });
  }
}

module.exports = UserController;
