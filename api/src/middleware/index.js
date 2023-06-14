const ifUserAlreadyExists = require('./ifUserAlreadyExists')
const { validateRequest } = require('./validators')

module.exports = {
  ifUserAlreadyExists,
  validateRequest,
}