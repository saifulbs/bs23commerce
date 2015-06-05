'use strict'

var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res) {
    res.send('category');
});

router.get('/:categoryId', function(req, res) {
    res.send('category');
});

router.post('/', function(req, res) {
    res.send('category');
});

router.put('/', function(req, res) {
    res.send('category');
});

router.delete('/:categoryId', function(req, res) {
    res.send('category');
});

module.exports = router;
