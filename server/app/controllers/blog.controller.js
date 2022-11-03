const db = require('../models')
const fs = require("fs")
const path = require("path")
const {uploadImage} = require("../middlewares")
const Blog = db.blog

exports.createBlog = async (req, res) => {
   uploadImage(req, res, (err) => {
      if (err)
         res.status(500).send(err)
      else {
         const blog = new Blog({
            title: req.body.title,
            content: req.body.content,
            image: {
               data: fs.readFileSync("uploads/"+ req.file.filename),
               contentType: 'image/png'
            }
         })

         blog.save()
             .then(() => res.status(200).send("Image Upload Successfully"))
             .catch((err) => res.status(500).send(err))
      }
   })
}

exports.blogs = (req, res) => {
   Blog.find()
       .then(blogs => res.status(200).send({data: blogs}))
       .catch(err => res.status(500).send(err))
}