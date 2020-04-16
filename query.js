const db = require('./db');

// Article Data
const articleData = {
  title: 'Python',
  author: 'Kevin Smith',
  body: 'This is an amazing book. I highly recommend it.',
};

// Create Article Query
// The create() method will also accept an array of objects
// db.Article.create(articleData, (err, newArticle) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newArticle);
//   }
// });

// Find All Articles
// db.Article.find({}, (err, allArticles) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(allArticles);
//   }
// });

// Find All Articles that Match Property
// db.Article.find({author: 'John Doe'}, (err, allArticles) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(allArticles);
//   }
// });

// Find Article By ID
// db.Article.findById('5e98df62992102027e084916', (err, foundArticle) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(foundArticle);
//   }
// });

// Find Article By ID And Update
// db.Article.findByIdAndUpdate(
//   '5e98df62992102027e084916',
//   {title: 'Java', author: 'Mary Smith', body: 'Eh....'},
//   {new: true},
//   (err, updatedArticle) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(updatedArticle);
//     }
//   }
// );

// Find Article By ID and Delete
// db.Article.findByIdAndDelete('5e98df62992102027e084916', (err, deletedArticle) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(deletedArticle);
//   }
// });
