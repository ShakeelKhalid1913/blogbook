const mongoose = require('mongoose')

const Blog = mongoose.model(
    "Blog",
    new mongoose.Schema({
       title:{
          type: String,
          required: true,
       },
       content:{
          type: String,
          required: true
       },
       image: {
          data: Buffer,
          contentType: String
       }
    })
)

module.exports = Blog