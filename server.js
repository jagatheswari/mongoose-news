const express = require('express')
// const mongojs = require("mongojs")
// const axios = require("axios")
// const cheerio = require("cheerio")
const { join } = require('path')
const app = express()


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// Connect to the Mongo DB
  require('mongoose').connect('mongodb://localhost/mongoose-news', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3000))
  // .catch(e => console.log(e))
  // When the server starts, create and save a new User document to the db
  // The "unique" rule in the User model's schema will prevent duplicate users from being added to the server  
  // db.Article.create({ name: "saved articles" })
  // .then(function(dbArticle) {
  //   console.log(dbArticle);
  // })
  .catch(function(err) {
    console.log(err.message);
  });


 


