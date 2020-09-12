// http://zetcode.com/javascript/winston/

const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

logger.info('Information message');
logger.warn('Warning message');

logger.log('info', 'Information message')
logger.log('warn', 'Warning message')