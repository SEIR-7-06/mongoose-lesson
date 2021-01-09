const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/test';

const configObj = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// If the database does not yet exist, it will not be listed in MongoDB until the firsr insert

// Connect to MongoDB
// Takes 2 args:
// - Connection String
// - Config Object

mongoose.connect(connectionString, configObj);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected succesfully');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected...');
});
