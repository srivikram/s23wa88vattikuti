var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let x;
  if (req.query.x) {
    x = Number(req.query.x);
  } else {
    x = Math.random() * 100;
  }

  const fn = ['log2', 'cosh', 'floor'][Math.floor(Math.random() * 5)];
  let y;

  if (fn === 'log2') {
    y = Math.log2(x);
  } else if (fn === 'cosh') {
    y = Math.cosh(x);
  } else {
    y = Math.floor(x);
  }

  const response = `${fn} applied to ${x} is ${y}`;
  res.send(response);
});

module.exports = router;