const express = require('express');
const emailValidation = require('../middleware/email.validation');
const passwordValidation = require('../middleware/password.validation');
const usernameValidation = require('../middleware/username.validation');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' });
})

router.post('/register', usernameValidation, emailValidation, passwordValidation, (req, res) => {
  res.status(201).json({ message: 'user created' });
})

module.exports = router;