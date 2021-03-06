'use strict'

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('product');
});

router.get('/:productId', function(req, res) {
    res.send('product');
});

router.post('/', function(req, res) {
    res.send('product');
});

router.put('/', function(req, res) {
    res.send('product');
});

router.delete('/:productId', function(req, res) {
    res.send('product');
});

module.exports = router;
