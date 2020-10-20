/* 
File name: app.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/


let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//modules for authentication
let session = require('express-session');
let passport = require('passport');

//authentication strategy
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy; // Alias for the local strategy

//authetication messaging
let flash = require('connect-flash');

//user model
let user = require('../../models/user');

//routing modules
let componentRouter = require('../server/routes/component')
let indexRouter = require('../../routes/server');
let usersRouter = require('../../routes/users');

let app = express();

let mongoose = require('mongoose');
let DB = require('./DB');

mongoose.connect(DB.URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection; // alias

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

// setup express session
app.use(session({
  secret: DB.Secret,
  saveUninitialized: false,
  resave: false
}))

//initialize flash
app.use(flash());

//initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//Connect and configure user model
let User = user.Module;

//implement a User Auth Strategy
passport.use(User.createStrategy());

//serialize and deserialize user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/component-list', componentRouter)
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
