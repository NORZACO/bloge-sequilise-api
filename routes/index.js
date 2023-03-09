var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(req.query)
//   res.render('index', { title: 'Express' });
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`<?xml version="1.0" encoding="UTF-8"?> <data> some data </data>`);
});


module.exports = router;