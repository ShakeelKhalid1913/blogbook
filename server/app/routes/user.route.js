const {users} = require("../controllers/user.controller")
module.exports = (app) => {
   app.use((req, res, next) => {
      res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
      )
      next()
   })

   app.get('/user/all', users)
}