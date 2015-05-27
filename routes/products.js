var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

router.get('/', function(req, res, next) {
  Product.find(function(err, products) {
	  if (err) {
	    console.log(err);
	    return next(err);
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
			return next(err);
		}
	});
	res.redirect('back');
});

router.get('/new', function(req, res, next) {
	res.render('products');
});

router.get('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			res.json(product);
		}
	});
});

router.put('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			product.name = req.body.name;
			product.price = req.body.price;
			product.aisle = req.body.aisle;

			product.save(function(err) {
				if (err) {
					console.log(err);
					return next(err);
				} else {
					res.json(product);
				}
			});
		}
	});
});

router.delete('/:id', function(req, res, next) {
	Product.findByIdAndRemove(req.params.id, req.body, function (err, product) {
    if (err) {
    	console.log(err);
    	return next(err);
    } else {
	    res.json(product);
    }
  });
});

module.exports = router;
