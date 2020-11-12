const express = require('express');
const router = express.Router();

/* GET Login page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST Login page  */
router.post('/', function(req, res, next) {
  const mailAddress = req.body['mail-address'];
  const password = req.body['password'];

  const blankError = (target) => `${target}が入力されていません`;
  if (!mailAddress) return res.render('index', { errorMessage: blankError('メールアドレス') });
  if (!password) return res.render('index', { errorMessage: blankError('パスワード') });

  res.render('/index');
});

module.exports = router;
