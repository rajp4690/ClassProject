var express = require('express')
var app = express.Router();

module.exports = app
    .use(function(req, res, next) {
        res.write('Printing form app.use\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write('Hello world');
        res.end();
    })
    .get('/goodbye', function (req, res) {
        res.write('New Paltz');
        res.end();
    })