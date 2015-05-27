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
        return next(err);
      } else {
        res.json(product);
      }
    });
  } else if (barcode) {
    Product.findOne({ 'barcode': barcode }, function(err, product) {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        res.json(product);
      }
    });
  } else {
    Product.find(function(err, products) {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        res.json(products);
      }
    });
  }
});

module.exports = router;
