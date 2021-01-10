const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/';
const DB = 'betacrew-test';
const connectToDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      dbName: DB,
    });
    console.log(`connected to ${DB}`);
  } catch (error) {
    console.log('failed to connect to ' + DB);
  }
};

module.exports = connectToDB;
