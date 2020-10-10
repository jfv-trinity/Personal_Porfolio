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
  res.render('index', { title: 'Home', message: 'Welcome to the Homepage!'  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Welcome to the Homepage!'  });
});


/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', message: 'Current Projects'  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', message: 'Under maintenance' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('me', { title: 'About', message: 'About Me' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', message: 'Contact Me' });
});




module.exports = router;
