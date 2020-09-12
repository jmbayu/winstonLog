// http://zetcode.com/javascript/winston/
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

/*
logger.error('error message 1');
logger.warn('warn message 1');
logger.info('info message 1');
logger.http('http message 1');
logger.verbose('verbose message 1');
logger.debug('debug message 1');
logger.silly('silly message 1');
*/

logger.configure({
    level: 'silly',
    //level: 'warn',
    transports: [
        new winston.transports.Console()
    ]
});

logger.error('error message 2');
logger.warn('warn message 2');
logger.info('info message 2');
logger.http('http message 2');
logger.verbose('verbose message 2');
logger.debug('debug message 2');
logger.silly('silly message 2');
