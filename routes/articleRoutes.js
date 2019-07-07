const { Article } = require('../models')
const axios = require('axios')

module.exports = app => {  

  
  app.get('/articles',(req,res) => {
    Article.find({})
    .then(articles => res.json(articles))
    .catch(e=> console.log(e))
  })
  
  //On front end you will need fetch('/articles).then(({title, link})) 
  //Display title and link onto webpage
  //Document.createElement('h3') 
  //.... innerHTML = "${title}"
  


  app.get('/scrape', (req, res) => {
    axios.get('https://www.nytimes.com/')
        .then(({ data }) => {
          const $ = require('cheerio').load(data)
          const articles = {}
          
          $('article').each((i, elem) => {
              articles.title = $(elem).find('h2').text();
              articles.link = `https://www.nytimes.com/${$(elem).find("a").attr("href")}`
          
          let newArticle = new Article(articles)
          newArticle.save((e, doc)=>{
            if (e) console.log(e) 
            //console log out the new articles we just saved to database
            else { console.log (doc)}
          })
        })
        })
          .catch(e=>console.log(e))
  
})







}


