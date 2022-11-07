const db = require('../models')
const fs = require("fs")
const Blog = db.blog
const User = db.user

exports.createBlog = async (req, res) => {
   const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: {
         data: fs.readFileSync("uploads/" + req.file.filename),
         contentType: 'image/png'
      },
      created_at: Date.now()
   })

   blog.save()
       .then(() => {
          const userid = req.body.user

          User.findByIdAndUpdate(userid,
              {$push: {blogs: blog._id}},
              {new: true, useFindAndModify: false}
          ).then(() => res.status(200).send("Blog Upload Successfully"))
              .catch(err => res.status(500).send(err.message))
       })
       .catch((err) => res.status(500).send(err.message))
}

exports.blogs = async (req, res) => {
   await User.find().populate({path: "blogs", options: {sort: {'created_at': "desc"}}})
       .then(users => res.status(200).send(users))
       .catch(err => res.status(500).send({message: err.message}))
}

exports.blogsByUserId = async (req, res) => {
   let userid = req.params.id
   await User.findById(userid).populate({path: "blogs", options: {sort: {'created_at': "desc"}}})
       .then(blogs => res.status(200).send(blogs))
       .catch(err => res.status(500).send(err.message))
}