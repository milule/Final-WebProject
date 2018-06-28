var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var wnumb = require('wnumb');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var handleLayoutMDW = require('./middleware/handleLayout'),
    handle404MDW = require('./middleware/handle404'),
    restrict = require('./middleware/restrict');

var productController = require('./controller/ProductController');
var cartController = require('./controller/CartController');
var homeController = require('./controller/HomeController');
var searchController = require('./controller/SearchController');
var adminController = require('./controller/AdminController');
var accountController = require('./controller/AccountController');

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
var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'qlbh',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayoutMDW);

app.get('/', (req, res) => {
    res.redirect('/home');
  });
 
app.use('/', homeController);
app.use('/', productController);
app.use('/cart', cartController);
app.use('/',searchController);
app.use('/',adminController);
app.use('/',restrict,accountController);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


module.exports = app;
