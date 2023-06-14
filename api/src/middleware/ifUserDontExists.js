const { db } = require('../config');

const ifUserDontExists = (req, res, next) => {

  const { email } = req.body;

  db
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then(([[user]]) => {
      if (!user) {
        res.status(401).send("Aucun compte existant avec cet email")
      } else {
        next()
      }
    })

}

module.exports = ifUserDontExists;