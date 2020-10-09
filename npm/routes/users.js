/* 
File name: users.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
