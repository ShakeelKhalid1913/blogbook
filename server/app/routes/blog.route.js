const controller = require('../controllers/blog.controller')
const { uploadImage } = require('../middlewares')

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
    next()
  })

  app.post('/blogs/upload', uploadImage.single('image'), controller.createBlog)
  app.get('/blogs/all', controller.blogs)
  app.get('/blogs/:id', controller.blogsByUserId)
}
