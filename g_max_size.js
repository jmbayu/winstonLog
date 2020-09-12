//http://zetcode.com/javascript/winston/
// max_size.js
const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf(info => `${info.message}`),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, 'g_max_size_500_Bytes_error.log'),
      level: 'silly',
      maxsize: 500
    })
  ]
});

logger.info(`${'a'.repeat(200)}`);
logger.info(`${'b'.repeat(200)}`);
logger.info(`${'c'.repeat(200)}`);


setTimeout(() => {
  logger.info(`${'d'.repeat(200)}`);
  logger.info(`${'e'.repeat(200)}`);
}, 1500);