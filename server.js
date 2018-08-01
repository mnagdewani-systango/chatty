// 'use strict'
require('babel-core/register')()
require('babel-polyfill')
var express = require('express')
var app = express()
var ioServer = require('./src/socket')(app)
var path = require('path');
var public = path.join(__dirname, 'public');

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

// Set the port number
var port = process.env.PORT || 6003
ioServer.listen(port)
