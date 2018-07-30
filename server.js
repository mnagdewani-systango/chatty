// 'use strict'

// Chat application dependencies
var express = require('express')
var app = express()
var ioServer = require('./app/socket')(app)
var path = require('path');
var public = path.join(__dirname, 'public');

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));


// Set the port number
var port = process.env.PORT || 6003
ioServer.listen(port)
