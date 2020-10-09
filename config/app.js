/* 
File name: app.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/


/* Module dependencies. */
/*  creates data to pass on to argument fields*/
let createError = require('http-errors');

/*  express routes*/
let express = require('express');

/*  sets values for path */
let path = require('path');

/*  allows the use of cookies */
let cookieParser = require('cookie-parser');

/* allows logger to exist */
let logger = require('morgan');


/*  creates pathway to files*/
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');

let app = express();

let mongoose = require('mongoose');

let DB = require('./DB');
mongoose.connect(DB.URL, {useNewUrlParser: true, useUnifiedTopology: true});




/* notifies if there is an error with MongoDB/Not relevant for assignment*/
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Open...");
});
db.once('connected', function() {
  console.log("Connected to MongoDB...");
});
db.on('reconnected', function() {
  console.log("Reconnected to MongoDB...");
});

db.on('disconnected', function() {
  console.log("Disconnected from MongoDB...");
});




// view engine setup
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
