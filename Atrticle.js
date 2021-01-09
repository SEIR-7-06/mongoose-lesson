const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const articleSchema = new Schema()

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  comments: [
    {
      commentBody: String,
      commentDate: Date,
    },
  ],
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
