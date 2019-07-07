module.exports = (Schema, model) => {

  const Article = new Schema({
  title:{
    type:String,
  },
  link:{
    type:String,
  }

  })

  //Creates our model from the above schema andnames it Article
  return model('Article', Article)
}