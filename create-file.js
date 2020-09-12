'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('winston');

const filename = path.join(__dirname, 'created-logfile.json');

//
// Remove the file, ignoring any errors
//
try { fs.unlinkSync(filename); }
catch (ex) { }

//
// Create a new winston logger instance with two tranports: Console, and File
//
//
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename })
  ]
});

logger.configure({
  level: 'silly',
  transports: [
    new winston.transports.File({ filename })
  ]
});

//logger.log('info', 'Hello created log files!', { 'fooinfo': 'barinfo' });
logger.log('info', 'Hello created log files!', { 'fooinfo': 'barinfo' });

logger.debug('Hello created log files!', { 'foodebug': 'bardebug' });
//logger.log('info', 'Hello created log files!', { 'foo': 'bar' });
//logger.log('info', 'Hello created log files!', { 'foo': 'bar' });

setTimeout(function () {
  //
  // Remove the file, ignoring any errors
  //
  //try { fs.unlinkSync(filename); }
  //catch (ex) { }
}, 1000);
