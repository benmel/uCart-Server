var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

router.get('/', function(req, res, next) {
	Product.find({ 'coupon': { '$ne': null } }, function(err, coupons) {
	  if (err) {
	    console.log(err);
	    return next(err);
	  } else {
	  	res.render('coupons', { coupons: coupons });
	  }
	});
});

router.get('/new', function(req, res, next) {
	Product.find(function(err, products) {
		if (err) {
			console.log(err);
	    return next(err);
		} else {
			res.render('new_coupon', { products: products, product: {} });
		}
	});
});

router.get('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			res.render('coupon', { products: {}, product: product });
		}
	});
});

router.put('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
		if (err) {
			console.log(err);
			return next(err);
		} else {
			product.coupon.price = req.body.price;
			product.coupon.image = req.body.image;
			product.save(function(err) {
				if (err) {
					console.log(err);
	    		return next(err);
				} else {
					res.redirect('/coupons');
				}
			});
		}
	});
});

router.delete('/:id', function(req, res, next) {
	Product.findById(req.params.id, function(err, product) {
    if (err) {
    	console.log(err);
    	return next(err);
    } else {
	    product.coupon = undefined;
	    product.save(function(err) {
				if (err) {
					console.log(err);
	    		return next(err);
				} else {
					res.redirect('/coupons');
				}
			});
    }
  });
});

module.exports = router;