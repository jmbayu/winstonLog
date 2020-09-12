const { silly } = require('winston');
const winston = require('winston');

const loggers = {
  mjson: winston.createLogger({
    level: 'silly',
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: 'h_two_log_JSON_splunk_app-silly.json'})],
  }),

  simple: winston.createLogger({
    level: 'verbose',
    format: winston.format.simple(),
    transports: [new winston.transports.File({ filename: 'h_two_log_JSON_splunk_app_app-verbose.log'}),],
  })
};

loggers.mjson.error('0: error log message')
loggers.mjson.warn('1: warn log message')
loggers.mjson.info('2: info log message')
loggers.mjson.http('3: http log message')
loggers.mjson.verbose('4: verbose')
loggers.mjson.debug('5: debug log message')
loggers.mjson.silly('6: silly log message')

//loggers.mjson.info('Information message');
//loggers.mjson.error('Error message');
//loggers.mjson.debug('Some debug message');
//loggers.mjson.silly('one silly message');
//loggers.mjson.log('silly', 'another via generic log function silly message');

loggers.simple.error('Error message');
loggers.simple.info('Information message');
loggers.simple.warn('Warning message');
loggers.simple.verbose('Some verbose message');