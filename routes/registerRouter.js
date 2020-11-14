const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

/* GET Register page */
router.get('/', registerController.index);

/* POST Register page  */
router.post('/', registerController.register);

module.exports = router;
