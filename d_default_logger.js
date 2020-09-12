const winston = require('winston');


const console = new winston.transports.Console();

winston.add(console);
winston.info('Information message');
winston.remove(console);