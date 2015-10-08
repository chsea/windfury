var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;


var effectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  target: {
    type: [String],
    enum: ['player', 'ownMinion','opponentMinion', 'opponent'],


  },
  quantity: {
    type: Number
  }

})



var damageSchema = effectsSchema.extend({
  amount: {
    type: Number
  }

})
var healSchema = effectsSchema.extend({
  amount :{
    type:Number
  }
})

var AlterPropertySchema = effectsSchema.extend({
  AP: {
    type: Number
  },
  HP:{
    type: Number
  } ,
  lowerCost: {
    type: Number
  }
})



mongoose.model('Effect', effectsSchema);

mongoose.model('Damage', damageSchema);
mongoose.model('Heal', effectsSchema);
mongoose.model('Alter', AlterPropertySchema);