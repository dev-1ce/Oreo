var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var data = require("./data");

// var index = require('./routes/index');
// var users = require('./routes/users');
// var config = require('./config/config');
const request = require('request-promise');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views2'));
app.set('view engine', 'ejs');
var Nexmo = require('nexmo');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { cacheControl: true, maxAge: '1 days' }));
app.use(logger('dev'));

// app.use('/', index);
// app.use('/users', users);



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// var nexmo = new Nexmo({
//     apiKey: config.apiKey,
//     apiSecret: config.apiSecret
//     // applicationId: APP_ID,
//     // privateKey: PRIVATE_KEY_PATH,
//   },{});



// app.get("/index",function (req,res) {
// 	res.sendFile((path.join(__dirname,"views",'/index.html')));
// });


app.get('/index', function (req, res) {
  res.render('index');
});

app.get("/sitemap.xml", function (req, res) {
  res.sendFile((path.join(__dirname, "views2", '/' + 'sitemap' + '.xml')))
});



app.get("/:name", (req, res) => {

  var name = req.params.name;
  console.log("req recieved with name" + name + "with data "  +data[name]);
  if (data[name]) {
    res.render('main',data[name]);
  }
  else
    res.render('error');;
  
});


app.get("/sitemap.xml", function (req, res) {
  res.sendFile((path.join(__dirname, "views", '/' + 'sitemap' + '.xml')));
})


app.get('/', function (req, res) {
  console.log("got / route requested")
  res.render('index');
});



// // commented portion for Serving static file with name as path of url present in views folder inside public
// app.get('/:name', function (req, res) {
//   name = req.params.name;
//   console.log(name);
//   res.sendFile((path.join(__dirname, "views", '/' + name + '.html')))
// });



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.listen(80, function () {
  console.log("server started at 80");
});


module.exports = app;
