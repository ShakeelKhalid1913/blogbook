const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.user = require('./user.model.js')
db.blog = require('./blog.model')

module.exports = db
