module.exports = function (data, db) {

  var express = require('express');
  var expressSession = require('express-session');
  var mongoStore = require('connect-mongo')(expressSession);
  var passport = require('./auth');
  var path = require('path');
  var favicon = require('serve-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');

  var routes = require('./routes/index');
  var users = require('./routes/users');
  var flights = require('./routes/flight')(data);

  var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));

  //app.use(express.cookieParser());
  app.use(expressSession({
    secret: 'key',
    store: new mongoStore({mongooseConnection: db}),
    saveUninitialized: false,
    resave: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', routes);
  app.use('/users', users);
  // app.get('/flight/:number', flights.flight);
  // app.put('/flight/:number/arrived', flights.arrived);
  // app.get('/list', flights.list);
  // app.get('/arrivals', flights.arrivals);
  app.use('/flight/:number', flights);
  app.use('/flight/:number/arrived', flights);
  app.use('/flight/list', flights);
  app.use('/flight/arrivals', flights);
  app.use('/login', routes);
  app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/users'
  }));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  return app;
};
