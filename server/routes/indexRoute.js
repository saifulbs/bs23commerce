var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testTheme', function(req, res, next) {
  res.render('testTheme/index', { title: 'Express' });
});

router.get('/testTheme/user/signUp', function(req, res) {
  res.render('testTheme/user/sign-up', { title: 'sign-up' });
});

router.get('/testTheme/user/list', function(req, res) {
  res.render('testTheme/user/user-list', { title: 'user list' });
});

module.exports = router;
