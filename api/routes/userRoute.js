'use strict'

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('user');
});

router.get('/:userId', function(req, res) {
  res.send('user');
});

router.post('/', function(req, res) {
  res.send('user');
});

router.put('/', function(req, res) {
  res.send('user');
});

router.delete('/:userId', function(req, res) {
  res.send('user');
});

router.put('/changePassword', function(req, res) {
  res.send('user');
});

router.put('/resetForgotPassword', function(req, res) {
  res.send('user');
});

router.post('/login', function(req, res) {
  res.send('user');
});

router.get('/logout', function(req, res) {
  res.send('user');
});

module.exports = router;
