class BaseController {
  req;
  res;
  model;

  constructor(req, res) {

    this.req = req
    this.res = res

  }

  getAll() {
    this.model.getAll()
      .then(([results]) => this.sendJson(results))
  }

  getById() {
    this.model.getById(this.req.params.id)
      .then(([results]) => this.sendJson(results))
  }

  postItem() {
    this.model.postItem(this.req.body)
      .then(([results]) => {
        this.res.status(201).json({ id: results.insertId, ...results })
      })

  }

  sendJson(data) {

    this.res.status(200).json(data)

  }

}

module.exports = BaseController;