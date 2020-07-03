const mongoose = require('mongoose');
// const Schema = mongoose.Schema(); // You can pull the schema out of mongoose and use it

// Mongoose Data Types
// Array, Object, String, Buffer, Mixed, Number, Boolean, Date

// Article Schema (Blueprint)
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  comments: [
    {
      body: String,
      commentDate: {
        type: Date,
        default: Date.now
      },
    },
  ],
});


// Article Model
// The first arg is the name of the model
// The second arg is the blueprint
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
