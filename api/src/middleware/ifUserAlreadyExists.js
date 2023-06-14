const { db } = require('../config');

const ifUserAlreadyExists = (req, res, next) => {

  const { email } = req.body;

  db
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then(([[user]]) => {
      if (user) {
        res.status(409).send("Email existant")
      } else {
        next()
      }
    })

}

module.exports = ifUserAlreadyExists;