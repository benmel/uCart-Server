var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

router.get('/products', function(req, res) {
  var name = req.query.name;
  var barcode = req.query.barcode;
  if (name) {
    Product.findOne({ 'name': name }, function(err, product) {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.json(product);
      }
    });
  } else if (barcode) {
    Product.findOne({ 'barcode': barcode }, function(err, product) {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.json(product);
      }
    });
  } else {
    Product.find(function(err, products) {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.json(products);
      }
    });
  }
});

router.get('/coupons', function(req, res) {
  Product.find({ 'coupon.price': { '$ne': null } }, function(err, coupons) { 
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      res.json(coupons);
    }
  });
});

module.exports = router;
