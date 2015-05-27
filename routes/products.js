var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');
var aisles = ['Other', 'A', 'B', 'C', 'D', 'E', 'F'];
var categories = ['Other', 'Meat', 'Dairy', 'Fruits', 'Vegetables', 'Beverages', 'Condiments'];

router.get('/', function(req, res, next) {
  Product.find(function(err, products) {
	  if (err) {
	    console.log(err);
	    return next(err);
	  } else {
	    res.render('products', { products: products });
	  }
	});
});

router.post('/', function(req, res, next) {
	Product.create(req.body, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			res.redirect('/products');
		}
	});
});

router.get('/new', function(req, res, next) {
	res.render('new_product', { product: {}, aisles: aisles, categories: categories });
});

router.get('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			res.render('product', { product: product, aisles: aisles, categories: categories });
		}
	});
});

router.put('/:id', function(req, res, next) {
	Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else { 
			res.redirect('/products');
		}
	});
});

router.delete('/:id', function(req, res, next) {
	Product.findByIdAndRemove(req.params.id, req.body, function(err, product) {
    if (err) {
    	console.log(err);
    	return next(err);
    } else {
	    res.redirect('/products');
    }
  });
});

module.exports = router;
