const multer = require('multer')
const util = require('util')

const storage = multer.diskStorage({
  destination: 'uploads',
  filename (req, file, callback) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    callback(null, fileName)
  }
})

const upload = multer({
  storage,
  fileFilter (req, file, cb) {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  }
})

module.exports = upload
