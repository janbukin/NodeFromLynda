var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//res.send('respond with a resource');
	if(req.session.passport.user === undefined) {
		res.redirect('/login');
	} else {
		res.render('users', {title: 'Welcome!', user: req.user});
	}
});

module.exports = router;
