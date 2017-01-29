var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.session.passport.user === undefined) {
		res.redirect('/login');
	} else {
		res.render('users', {title: 'Welcome!', user: req.user});
	}
});

module.exports = router;
