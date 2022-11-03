const {uploadImage} = require('../middlewares')
const controller = require('../controllers/blog.controller')

module.exports = (app) => {
   app.use((req, res, next) => {
      res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
      )
      next()
   })

   app.post('/blogs/upload', controller.createBlog)
   app.get('/blogs/all', controller.blogs)
}