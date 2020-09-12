const { level } = require('winston');
// http://zetcode.com/javascript/winston/

const winston = require('winston');
// console.log("starting ...")

const logger = winston.createLogger({
    level: 'verbose',
    transports: [
   
        new winston.transports.Console()
    ]
});



logger.error('0: error log message')
logger.warn('1: warn log message')
logger.info('2: info log message')
logger.http('3: http log message')
logger.verbose('4: verbose')
logger.debug('5: debug log message')
logger.silly('6: silly log message')