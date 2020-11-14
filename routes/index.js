const express = require('express');
const router = express.Router();
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');

router.use('/', loginRouter)
router.use('/register', registerRouter)

module.exports = router;
