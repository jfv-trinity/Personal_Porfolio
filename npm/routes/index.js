/* 
File name: index.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
