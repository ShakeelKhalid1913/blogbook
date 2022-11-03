const {verifySignup} = require('../middlewares')
const controller = require('../controllers/auth.controller.js')

module.exports = (app) => {
   app.use((req, res, next) => {
      res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
      )
      next()
   })

   app.post('/auth/signup', [
      verifySignup.checkDuplicateEmail
   ], controller.signUp)

   app.post('/auth/signin', controller.signIn)
   app.post('/auth/signout', controller.signOut)
}