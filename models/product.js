var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  price: Number,
  aisle: String
});

module.exports = mongoose.model('test_products', ProductSchema);
