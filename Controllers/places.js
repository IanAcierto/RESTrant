const express = require('express')
const router = require('express').Router() 
const Place = require('../models/places')
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find({})
  .then(places=>{
    console.log('function log', places, 'endlog')
    res.render('places/index',{ places })
  })
  .catch((err)=>{
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err =>{
    if(err&&err.name == 'ValidationError'){
      console.log(err, err.name)
      let message = 'ValidationError':
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}.`
        message += `${field} was ${err.errors[field].message}`
      }
      console.log('validation error message', message)
    }
    else{res.render('error404/error404')}
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place=>{
    res.render('places/show', {place})
  })
  .catch(err=>{
    console.log('err', err)
    res.render('error404/error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
