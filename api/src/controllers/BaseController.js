class BaseController {
  req;
  res;
  model;

  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  getAll() {
    this.model.getAll().then(([results]) => this.sendJson(results));
  }

  getById() {
    this.model
      .getById(this.req.params.id)
      .then(([results]) => this.sendJson(results));
  }

  postItem() {
    this.model.postItem(this.req.body).then(([result]) => {
      this.res.status(201).json({ id: result.insertId, ...this.req.body });
    });
  }

  updateItem() {
    this.model
      .updateItem(this.req.body, this.req.params.id)
      .then(([result]) => {
        this.res.sendStatus(200);
      });
  }

  deleteItem() {
    this.model
      .deleteItem(this.req.params.id)
      .then(([results]) => this.sendJson(results));
  }

  sendJson(data) {
    this.res.status(200).json(data);
  }
}

module.exports = BaseController;
