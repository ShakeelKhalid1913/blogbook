const db = require('../models');
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
   User.findOne({
      email: req.body.email
   }).exec((err, user) => {
      if (err)
         res.status(500).json({message: err});
      else {
         if (user) {
            return res.status(400).send({message: "Failed! Email is already in use"});
         }
         next();
      }
   });
};

const verifySignup = {
   checkDuplicateEmail
};

module.exports = verifySignup;


