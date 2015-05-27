var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, required: true, lowercase: true},
  barcode: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  aisle: { type: String, required: true },
  category: { type: String, required: true } 
});

module.exports = mongoose.model('test_products', ProductSchema);
