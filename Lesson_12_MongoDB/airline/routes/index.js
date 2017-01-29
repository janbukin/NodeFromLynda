var express = require('express');
var router = express.Router();
//var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Log in'});
});

module.exports = router;
