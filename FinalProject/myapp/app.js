var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var wnumb = require('wnumb');
var session = require('express-session');

var indexRouter = require('./controller/ProductController');
var cartController = require('./controller/CartController');

var app = express();

app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  layoutsDir: 'views',
  helpers: {
      section: exphbs_section(),
      number_format: n => {
        var nf = wnumb({
            thousand: ','
        });
        return nf.to(n);
    }
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

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //     secure: true
    // }
}))


app.use('/', indexRouter);
app.use('/cart', cartController);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


module.exports = app;
