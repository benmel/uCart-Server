var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Product.find(function(err, products) {
	  if (err) {
	    console.log(err);
	  } else {
	    res.json(products);
	  }
	});
});

router.post('/', function(req, res, next) {
	var newProduct = new Product({ name: req.body.name, price: req.body.price, aisle: req.body.aisle });
	newProduct.save(function(err) {
		if (err) {
			console.log(err);
		}
	});
	res.redirect('back');
});

router.get('/new', function(req, res, next) {
	res.render('products');
});

router.get('/:id', function(req, res, next) {
	res.send('Get product');
});

router.put('/:id', function(req, res, next) {
	res.send('Update product');
});

router.delete('/:id', function(req, res, next) {
	res.send('Delete product');
});

module.exports = router;
