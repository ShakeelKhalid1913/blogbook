const mongoose = require('mongoose')

const Blog = mongoose.model(
  'Blog',
  new mongoose.Schema({
    title: String,
    content: String,
    image: {
      data: Buffer,
      contentType: String
    },
    created_at: Date
  })
)

module.exports = Blog
