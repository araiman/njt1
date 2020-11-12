const express = require('express');
const router = express.Router();

/* GET Register page */
router.get('/', function(req, res, next) {
  res.render('register');
});

/* POST Register page  */
router.post('/', function(req, res, next) {
  res.render('register')
});

module.exports = router;
