const winston = require('winston');
 

const myformat = winston.format.cli({ colors: { info: 'yellow' }});


const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: myformat
        })
    ]
});

logger.info('Information message');