var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId
var deepPopulate = require('mongoose-deep-populate')

var schema = new mongoose.Schema({
  name: {type:String},
  cards: [{type: ObjectId, ref: "Cards"}],
  user: {type:ObjectId, ref: "Users"}

})

schema.plugin(deepPopulate, {})

mongoose.model('Decks', schema)