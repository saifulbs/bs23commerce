'use strict'

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('settings');
});

router.get('/:settingsId', function(req, res) {
    res.send('settings');
});

router.post('/', function(req, res) {
    res.send('settings');
});

router.put('/', function(req, res) {
    res.send('settings');
});

router.delete('/:settingsId', function(req, res) {
    res.send('settings');
});

module.exports = router;

