//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const app = express()

//middleware 
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//ROUTES
app.get('/', (req, res) => {
  res.render('home/home')
})



//PLACES
app.use('/places', require('./controllers/places'))

//404
app.get('*', (req,res) =>{
  res.status(404).render('error404/error404')
})

//LISTEN
app.listen(PORT, (req,res) => {
  console.log('listening on ' + PORT)
})
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})