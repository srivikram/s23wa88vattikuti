var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Manohar Sri Vikram Vattikuti' });
});

module.exports = router;
