const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/mongoose_intro';

mongoose.connect(connectionString, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('MongoDB successfully connected...');
  })
  .catch(() => console.log('MongoDB connection failed...'));
