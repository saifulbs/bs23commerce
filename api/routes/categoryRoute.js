'use strict'

var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {
    res.send('category');
});

router.post('/', function(req, res, next) {
    res.send('category');
});

module.exports = router;