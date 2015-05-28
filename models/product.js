var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, required: true, lowercase: true, trim: true },
  barcode: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  aisle: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  coupon: { price: { type: Number, min: 0 },
						image: {type: String, trim: true }
					}
});

module.exports = mongoose.model('test_products', ProductSchema);
