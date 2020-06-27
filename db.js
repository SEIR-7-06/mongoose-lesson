// Mongoose (ODM) is like jQuery for MongoDB
// Gives us consistency via our Schema, and helpfull methods for querying
const mongoose = require('mongoose');
const connectionString = `mongodb://localhost:27017/mongoose-intro`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('MongoDB is connected...');
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`)
  });


module.exports = {
  Article: require('./Article'),
};
