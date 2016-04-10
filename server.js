'use strict';

/**
 * setup server
 */
var express = require('express');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var port = process.env.PORT || 3000;

/**
 * start and configure server
 */
var app = express();

app.use(bodyParser.json());
app.use(useragent.express());

/**
 * setup routes
 */
app.get('/', function(req, res) {
    var header = req.headers;
    var language = header['accept-language'].split(',');

    res.json({  ipaddress: header.host,
                language: language[0],
                software: req.useragent.platform + ', ' + req.useragent.os
             });
});

/**
 * start server
 */
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});