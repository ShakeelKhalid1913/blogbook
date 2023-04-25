const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const app = express()
const db = require('./app/models')
const dbConfig = require('./app/config/db.config')

dotenv.config()
// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
  })
)
app.use(bodyParser.json())
app.use(
  cookieSession({
    name: 'session',
    secret: 'COOKIE_SECRET',
    httpOnly: true
  })
)

// add routes
require('./app/routes/auth.route')(app)
require('./app/routes/user.route')(app)
require('./app/routes/blog.route')(app)

// connect with database
db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSWORD}@cluster0.o1kyzlh.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() =>
    app.listen(dbConfig.PORT, () =>
      console.log('Server is running on PORT', dbConfig.PORT)
    )
  )
  .catch((err) => {
    console.error('Connection error', err)
    process.exit()
  })

db.mongoose.connection.once('open', () => {
  console.log('MongoDB connection has been established')
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blog App' })
})
