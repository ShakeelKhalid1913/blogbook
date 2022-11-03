const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const db = require('../models')

const verifyToken = (req, res, next) => {
   let token = req.session.token

   if (!token) {
      return res.status(403).json({message: "No Token Provided"})
   }

   jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
         return res.status(401).json({message: "Unauthorized!"})
      }
      req.userId = decoded.id
      next()
   })
}

const authJwt = {
   verifyToken
}

module.exports = authJwt