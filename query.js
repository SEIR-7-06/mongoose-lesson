require('./db');
const Article = require('./Article');


// Find Article By Title
// Article.find({title: 'Article One'}, (err, foundArticle) => {
//   // Always handle the error first
//   if (err) console.log(err);
//   console.log(foundArticle);
//   process.exit();
// });

// Find All Articles
Article.find({}, (err, foundArticle) => {
  // Always handle the error first
  if (err) console.log(err);

  console.log(foundArticle);
  process.exit();
});



// Creat Article Data
const articleData = [
  {
    title: 'Article Two',
    author: 'John Doe',
    body: 'This is the body for Article One'
  },
  {
    title: 'Article Three',
    author: 'John Doe',
    body: 'This is the body for Article One'
  }
]

// Create Article Query
// Article.create(articleData, (err, newArticle) => {
//   if (err) console.log(err);

//   console.log('New Article created successfully');
//   console.log(newArticle);
//   process.exit();
// });

// Update One Article
// Article.findByIdAndUpdate(
//   '5efe6607df49cead5b59b634', // Which article by ID to find
//   {author: 'John Doe', title: 'No title'}, // Object representing the changes to make
//   {new: true}, // Do you want the origial, unedited doc, or the updated doc back
//   (err, updatedArticle) => {
//     if (err) console.log(err);

//     console.log(updatedArticle);
//     process.exit();
//   }
// );

// Delete One Article
// Article.findOneAndDelete({title: 'No title', author: 'John Doe'}, (err, deletedArticle) => {
//   if (err) console.log(err);

//   console.log(deletedArticle);
//   process.exit();
// });
