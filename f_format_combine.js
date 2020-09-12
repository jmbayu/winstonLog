const { silly } = require('winston');
//http://zetcode.com/javascript/winston/
const winston = require('winston');
 

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  //winston.format.printf(silly => `${silly.timestamp} ${silly.level}: ${silly.message}`)

);

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level:'silly',
            format: myformat
        })
    ]
});


logger.error('0: error log message')
logger.warn('1: warn log message')
logger.info('2: info log message')
logger.http('3: http log message')
logger.verbose('4: verbose')
logger.debug('5: debug log message')
logger.silly('6: silly log message')