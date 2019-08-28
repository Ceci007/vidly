const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');



module.exports = function() {
  const db = config.get('db');
  
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  
  mongoose.connect(db, {useNewUrlParser: true})
    .then(() => winston.info(`Connected to ${db}...`))
    .catch(e => console.error(e));
}