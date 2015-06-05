'use strict'

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('order');
});

router.get('/:orderId', function(req, res) {
    res.send('order');
});

router.post('/', function(req, res) {
    res.send('order');
});

router.put('/', function(req, res) {
    res.send('order');
});

router.delete('/:orderId', function(req, res) {
    res.send('order');
});

module.exports = router;
