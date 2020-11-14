const loginController = require('../controllers/loginController')
const express = require('express');
const router = express.Router();

/* GET Login page */
router.get('/', loginController.index);

/* POST Login page  */
router.post('/', loginController.login);

module.exports = router;