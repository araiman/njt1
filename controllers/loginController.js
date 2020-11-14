module.exports = {
  index(req, res) {
    res.render('index');
  },
  login(req, res) {
    const mailAddress = req.body['mail-address'];
    const password = req.body['password'];

    const blankError = (target) => `${target}が入力されていません`;
    if (!mailAddress) return res.render('index', { errorMessage: blankError('メールアドレス') });
    if (!password) return res.render('index', { errorMessage: blankError('パスワード') });

    res.render('index');
  }
};