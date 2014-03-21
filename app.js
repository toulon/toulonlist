/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var i = 0,
  counts = []
app.get('/', routes.index);
app.get('/users', user.list);

app.get('/edit', function (req, res) {
  res.render('edit-form')
})

app.post('/joe', function (req, res) {
  i++;
  res.send("Response back was " + req.body.cnt)
  cnt = req.body.cnt;
  console.log("cnt = " + cnt);
  counts[i] = cnt;
  res.redirect('/edit')
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
