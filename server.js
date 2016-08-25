var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var starting_sce = {
  scenario: [
    {"child_event": "Your child wants more snack",
     "choiceA": "No, they already have their portion",
     "choiceB": "Give them some healthy options to choose from",
     "choiceC": "Give them anything they want",
     "choiceD": "Leave them be"},
    {"child_event": "Your child grabs a toy from a friend",
     "choiceA": "Order them to return the toy immediately",
     "choiceB": "Tell them that their friend is playing with it and they can take turn playing",
     "choiceC": "Your child should be able to play with it whenever they want to",
     "choiceD": "Not intervene"}
  ]
};

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/game', function(req, res) {
  res.render('game', starting_sce);
});

//404 page
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log("Express started at port" + app.get('port'));
});

/*var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('./public/index.html', function (err, data) {
      if (err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end("500 - Internal error");
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
}).listen(8080);

console.log("Server started");*/
