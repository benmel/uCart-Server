var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');

router.route('/products')
  .get(function(req, res) {
    var name = req.query.name;
    if (name) {
      Product.findOne({ 'name': name }, function(err, product) {
        if (err) {
          console.log(err);
        } else {
          res.json(product);
        }
      });
    } else {
      Product.find(function(err, products) {
        if (err) {
          console.log(err);
        } else {
          res.json(products);
        }
      });
    }
  });

module.exports = router;
