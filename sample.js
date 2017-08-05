const yeomanSync = require('./lib/index.js');
const jsonfile = require('jsonfile')

let config = jsonfile.readFileSync('./config.json');

yeomanSync(config);