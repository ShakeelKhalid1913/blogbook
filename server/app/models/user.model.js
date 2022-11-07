const mongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({
       username: String,
       email: {
          type: String,
          required: true,
          unique: true
       },
       password: String,
       blogs: [
          {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Blog"
          }
       ]
    })
)

module.exports = User