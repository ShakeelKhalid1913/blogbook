const config = require('../config/auth.config.js')
const db = require('../models')
const User = db.user
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res) => {
   const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
   })

   await user.save()
       .then(() => res.status(200).send("User registered successfully "))
       .catch((err) => res.status(500).send(err))
}

exports.signIn = async (req, res) => {
   await User.findOne({
      email: req.body.email
   }).exec((err, user) => {
      if (err) {
         res.status(500).send(err)
      } else if (!user)
         res.status(404).send("User not found")
      else {
         const password = bcrypt.compareSync(
             req.body.password, user.password
         )

         if (!password) {
            res.status(401).send("Invalid Password!")
         } else {
            req.session.token = jwt.sign({id: user._id}, config.secret, {
               expiresIn: 86400
            })

            res.status(200).send({
               id: user._id,
               email: user.email,
               password: user.password,
               username: user.username,
               "accessToken": req.session.token
            })
         }
      }
   })
}

exports.signOut = async (req, res) => {
   try {
      req.session = null
      return res.status(200).json({message: "You've been signed out!"})
   } catch (err) {
      this.next(err)
   }
}