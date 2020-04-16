const db = require('./db');

// Article Data
const articleData = {
  title: 'Python',
  author: 'Kevin Smith',
  body: 'This is an amazing book. I highly recommend it.',
};

// Create Article Query
// db.Article.create(articleData, (err, newArticle) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newArticle);
//   }
// });

// Find Artcles
// db.Article.find({author: 'John Doe'}, (err, allArticles) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(allArticles);
//   }
// });

// db.Article.findById('5e98df62992102027e084916', (err, foundArticle) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(foundArticle);
//   }
// });

db.Article.findByIdAndUpdate(
  '5e98df62992102027e084916',
  {title: 'Java', author: 'Mary Smith', body: 'Eh....'},
  {new: true},
  (err, updatedArticle) => {
    if (err) {
      console.log(err);
    } else {
      console.log(updatedArticle);
    }
  }
);
