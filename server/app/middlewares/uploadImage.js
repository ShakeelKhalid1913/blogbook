const multer = require("multer")
const util = require("util")

const storage = multer.diskStorage({
   destination: 'uploads',
   filename(req, file, callback) {
      callback(null, file.originalname)
   }
})

const upload = multer({storage: storage}).single("image")
// const uploadImage = util.promisify(upload)

module.exports = upload

