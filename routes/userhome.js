var express = require('express');
var router = express.Router();

/* GET userhome. */
router.get('/', function(req, res, next) {
  res.render('userhome', { title: 'Home' });
});

module.exports = router;