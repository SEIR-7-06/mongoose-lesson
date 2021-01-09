require('./db');
const Article = require('./Article');

const articleData = {
  title: 'Article Two',
  body: 'This is the body to Article Two',
  author: 'John Doe',
};


// Find All Query
// Takes 2 args
// - A filtering object
// - Callback to execute on completion
// Article.find({}, (err, allArticles) => {
//   if (err) {
//     console.log('Failed');
//     console.log(err);
//     process.exit(); // This is just for scripting
//   }

//   console.log('Success');
//   console.log(allArticles);
//   process.exit(); // This is just for scripting
// });


// 5ff8e4bd43177c1158f41bf3

// Find One By ID Query
// Article.findById(
//   '5ff8e4bd43177c1158',
//   (err, foundArticle) => {
//     if (err) {
//       console.log('Failure');
//       console.log(err);
//       process.exit();
//     }

//     console.log('Sucess');
//     console.log(foundArticle);
//     process.exit();
//   },
// );

// Find One By ID Query
// Article.findOne(
//   { title: 'Article Two' },
//   (err, foundArticle) => {
//     if (err) {
//       console.log('Failure');
//       console.log(err);
//       process.exit();
//     }

//     console.log('Sucess');
//     console.log(foundArticle);
//     process.exit();
//   },
// );


// Create Query
// Takes 2 args
//  - Object representing the new resource
//  - Callback to execute on completion
// Article.create(articleData, (err, createdArticle) => {
//   if (err) {
//     console.log('Failed');
//     console.log(err);
//     process.exit(); // This is just for scripting
//   }

//   console.log('Success');
//   console.log(createdArticle);
//   process.exit(); // This is just for scripting
// });


// Update Query
// Takes 4 args
//  - id of the record to update
//  - Object describing properties with updated values
//  - Ojbect describing updated or original record return
//  - Callback
// Article.findByIdAndUpdate(
//   '5ff8e52e29fc1811e69e4e4d',
//   {
//     title: 'Article Two',
//     body: 'This is the body for Article Two',
//     author: 'Sara Smith',
//   },
//   { new: true },
//   (err, updatedArticle) => {
//     if (err) {
//       console.log('Failed');
//       console.log(err);
//       process.exit();
//     }

//     console.log('Success');
//     console.log(updatedArticle);
//   },
// );

// Delete Query
// Takes 2 Args
//  - ID of the record to delete
//  - Callback to run on completion
// Article.findByIdAndDelete(
//   '5ff8e52e29fc1811e69e4e4d',
//   (err, deletedArticle) => {
//     if (err) {
//       console.log('Failure');
//       console.log(err);
//       process.exit();
//     }

//     console.log('Success');
//     console.log(deletedArticle);
//     process.exit();
//   },
// );


// --------------- QUERIES IN ORDER

// 1) Create Query
// 2) Find All Query

// Create Query (QUERY #1)
// Takes 2 args
//  - Object representing the new resource
//  - Callback to execute on completion
Article.create(articleData, (err, createdArticle) => {
  if (err) {
    console.log('Failed');
    console.log(err);
    process.exit(); // This is just for scripting
  }

  console.log('Success');
  console.log(createdArticle);


  // Find all Query (QUERY #2)
  Article.find({}, (err, allArticles) => {
    if (err) {
      console.log('Failed');
      console.log(err);
      process.exit(); // This is just for scripting
    }

    console.log('Success');
    console.log(allArticles);
    process.exit(); // This is just for scripting
  });
});
