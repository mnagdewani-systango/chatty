require('babel-core/register')()
require('babel-polyfill')

var express = require('express')
var app = express()
var ioServer = require('./src/socket')(app)
var path = require('path');
var config = require('./config')

// Demo clinet
if(config.enableDemoClinet){

    var public = path.join(__dirname, 'public')

    app.get('/', function(req, res) {
        res.sendFile(path.join(public, 'index.html'))
    });

    app.use('/', express.static(public))
} else {
    app.get('/', (req, res) =>res.sendStatus(200))
}


// Set the port number
var port = process.env.PORT || 3000
ioServer.listen(port)
