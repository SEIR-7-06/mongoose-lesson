# Mongo - Mongoose

## Lesson Objectives
1. Explain what an ODM is
1. Create a Schema for a collection
1. Create a model and save it
1. Find a specific model
1. Update a model already in the database
1. Remove a model already in the database
1. Combine Actions

## What is an ODM?

ODM stands for Object Document Model. It translates the "documents" being stored in Mongo into fancier JS objects that have more helpful methods and properties. The ODM that we will use with MongoDB is Mongoose.

Mongoose presents us with two key concepts for how we create and store data in our MongoDB database: Schemas and Models.


## What is a Schema?

**[Schema](http://mongoosejs.com/docs/guide.html)**: A Schema is a diagram or blueprint for what every object in the noSQL database will contain. It does not include any methods, just placeholders for what data you will eventually store. Here's an example of a simple Address Book mongoose schema:

```js
const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: Number,
    email: String,
    professionalContact: Boolean
});
```

With the above Schema, we can expect that all ojects created from this blueprint would have a first name, last name, address, and email address in the form of Strings. We can count on the phoneNumber to always be accepted, stored, and returned as a number. Lastly, the boolean value of Professional Contact will always be a true or false. A Schema has no functionality. It simply defines the shape of the data that we will expect when we work with contacts.

## What is a Model?

**[Model](http://mongoosejs.com/docs/models.html)**: A mongoose model is compiled from a Schema. It takes in the structure and shape of a Schema and adds the capacity to perform actions such as reading, saving, updating, etc. The Schema is just an inert mould to make sure that the models will hold the data consistently. A model is actually capable of creating new entries in a database and retrieving data from the database. Here's how you'd make a Contact model out of our Contact Schema:

```js
const Contact = mongoose.model('Contact', ContactSchema);
```

> In mongoose, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indicies. A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".

# Let's Code!

## Create a connection to MongoDB

We need to install and require Mongoose, and connect to the MongoDB service (it could be local or hosted).

First install the npm package

```
npm i mongoose
```

Let's set up our database connection in a file called ```db.js```
```javascript
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/test';


mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

```

- With the configuration above, we are connecting to a database named "test" running on a local MongoDB service. The databse automatically be called whatever you put after ```localhost:27017/```

## Create a Schema and Model for a database resource

In mongo, you can put whatever you want into your collections.  This can be a little dangerous because you might make a mistake in your code.  To avoid having the wrong kind of data in your database, Mongoose allows us to create Schemas (or blueprints) for our objects, so that something funny doesn't find its way in.  Each Schema maps to a Collection and defines the shape of the documents.

- Let's create a model for our Article resource in a file called ```Article.js```
```javascript
const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

const articleSchema = new Schema({
	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	author: { type: String, required: true },
	body:   String,
	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
	hidden: Boolean,
	meta: { // can have properties that are objects
		votes: Number,
		favs:  Number
	}
});

//Creating an Article class -- will be stored in 'articles' collection.  Mongo does this for you automatically
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
```

Here are the most common types of properties you can have

1. String
1. Number
1. Date
1. Boolean
1. Mixed
1. ObjectId
1. Array

### The Big Picture 
<br>

- Here is the big picture overview of the components we'll be working with:

<img src="https://i.imgur.com/Q6A7KTQ.png" width="900">

---

## Query the Databse

Now that we have an Article model, we can import it in another file, just to keep things clean, and use it to create a new Article in our DB.  Remember, all the Article schema does is set up the blueprint that all article objects must follow.  It doesn't create anything in the DB.

Let's a new file called ```query.js``` and require our database connection and Article model

```javascript
require('./db')
const Article = require('./article.js');



```

## Find

The `Article` class itself has functions that you can call.  Note this is not a specific instance of an article, but rather the class.

Mongoose's find method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the data comes back.

```query.js```


```javascript
Article.find(
	{},
	(err, allArticles) => {
		console.log(allArticles); // an array of all articles
	}
);

```javascript
Article.find(
	{ author: 'John Doe' },
	(err, articles) => {
		console.log(articles); // an array of articles where author = John Doe
	}
);
```

## Create

Mongoose's create method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the update is complete.

```query.js```

```javascript
Article.create({
	title: 'Awesome Title',
	author: 'John Doe',
}, (err, createdArticle) => {
	if(err) { //if there's an error, log it
		console.log(err);
	} else { //else log the created article
		console.log(createdArticle);
	}
});
```

## Update

Mongoose's update method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the update is complete.

```javascript
Article.findByIdAndUpdate(
	ENTER ID FROM YOUR DATABASE HERE,
	{ author: 'Jane Smith' },
	{ new: true },
	(err, updatedArticle) => {
		console.log(updatedArticle);
	}
);
```

alternatively:

```javascript
Article.updateOne(
	{ author: 'John Doe' },
	{ $set : { author: 'Jane Smith' } },
	{ multi: true },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

## Delete

Mongoose's delete method is pretty similar Mongo's, except you need to pass it a callback function to be executed when the remove is complete.

```javascript
Article.findByIdAndDelete(
	ENTER ID FROM YOUR DATABASE HERE,
	(err, deletedArticle)=>{
		console.log(deletedArticle);
	}
);
```

alternatively:

```javascript
Article.deleteOne(
	{ author: 'John Doe' },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

## Combine Actions

The following will not work as expected (create an article and then remove it):

```javascript
Article.create({
	title: 'Awesome Title',
	author: 'Sara Smith'
}, (err, createdArticle)=>{
	if(err) { //if there's an error, log it
		console.log(err);
	} else { //else log the created article
		console.log(createdArticle);
	}
});
Article.deleteOne(
	{ author: 'Sara Smith' },
	(err, response)=>{
		console.log(response); //just tells you the action was successful
	}
);
```

Instead, you'll have to execute the second command in the callback of the first

```javascript
Article.create({
	title: 'Awesome Title',
	author: 'Sara Smith'
}, (err, createdArticle)=>{
	if(err) { //if there's an error, log it
		console.log(err);
	} else { //else delete the created article
		Article.deleteOne(
			{ author: 'Sara Smith' },
			(err, response)=>{
				console.log(response); //just tells you the action was successful
				
			}
		);
	}
});
```
