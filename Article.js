const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  comments: [{
    body: String,
    commentDate: {
      type: Date,
      default: Date.now
    }
  }],
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
