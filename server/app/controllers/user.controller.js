const User = require('../models/user.model')

exports.users = async (req, res) => {
  const users = await User.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(401).send(err.message))
}
