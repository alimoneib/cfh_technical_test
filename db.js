const mongoose = require('mongoose');
require('./models');

const dbConnector = async (dbUrl, dbName) => {
  mongoose.set('strictQuery', false);
  const connector = await mongoose.connect(
    dbUrl,
    {
      dbName,
      useNewUrlParser: true,
      autoIndex: true,
      retryWrites: true,
      w: 'majority',
    }
  ).catch((e) => {
    throw e;
  });

  connector.connection.on('disconnected', () => {
    console.log('DB is disconnected');
  });
  connector.connection.on('reconnected', () => {
    console.log('DB reconnected');
  });
  connector.connection.on('connected', () => {
    console.log('DB connected');
  });
};

module.exports = dbConnector;
