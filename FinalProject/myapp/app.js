var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');

var indexRouter = require('./controller/ProductController');

var app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  layoutsDir: 'views',
  helpers: {
      section: exphbs_section()
  }
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


module.exports = app;
