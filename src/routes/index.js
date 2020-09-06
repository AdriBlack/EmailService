const express = require('express');

const { sendEmailController } = require('../controllers')

const router = express.Router()

router.post('/contact-me', sendEmailController)

module.exports = router;