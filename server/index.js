var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app
    .use(function (req, res, next) {
        res.write('Printing form app.use\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write('world');
        res.end();
    })
    .get('/goodbye', function (req, res) {
        res.write('New Paltz');
        res.end();
    })
    .listen(8080);