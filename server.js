const http = require('http');
const debug = require('debug')('server');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var mysql = require('./config/mysql')();

var app = express();

debug('starting express server');

http.createServer(app).listen(3000, function() {
  debug('express running');
})

// crtl+c in Windows richtig interpretieren
if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

// gracefully shut down everything
process.on('SIGINT', function() {
  debug('exiting...');
  mysql.end(function() {
    debug('db connection closed');
    process.exit();
  });
})
