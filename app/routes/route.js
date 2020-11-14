let getConfig = require('../config/config');

// const firebaseConfig = require('./app/config/database');
const bodyParser = require('body-parser');
getConfig.app.use(bodyParser.json()); //needed to parse HTTP request body

require('./users/userRoute');
require('./greams/greamsRoute');
require('./collections/collectionsRoute');
