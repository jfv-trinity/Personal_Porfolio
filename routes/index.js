/* 
File name: index.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/


let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Movie = require('../models/movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', message: 'Contact Me' });
});

/* GET Movie-List Page */
router.get('/movie-list', function(req, res, next) {

  Movie.Model.find((err, data) =>{
    if(err)
    {
      console.log(err);
      res.end();
    }
    res.render('index', { title: 'Movie List', movieList: data });
  });

  
});


module.exports = router;
