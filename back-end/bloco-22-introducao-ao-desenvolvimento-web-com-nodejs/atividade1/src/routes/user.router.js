const express = require('express');
const axios = require('axios');
const emailValidation = require('../middleware/email.validation');
const passwordValidation = require('../middleware/password.validation');
const tokenValidation = require('../middleware/token.validation');
const loginValidation = require('../middleware/login.validation');
const usernameValidation = require('../middleware/username.validation');
const urlAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const userDb = require('../db/user.db');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' });
})

router.post('/register', usernameValidation, emailValidation, passwordValidation, async (req, res) => {
  const { username, email, password } = req.body;
  console.log('register');
  await userDb.insert({ username, email, password });
  res.status(201).json({ message: 'user created' });
})

router.post('/login', emailValidation, passwordValidation, loginValidation, (req, res) => {
  res.status(200).json({ token: "86567349784e" });
})

router.get('/btc/price', tokenValidation, async (req, res) => {
  const result = await axios.get(urlAPI);
  res.status(200).json(result.data);
})


module.exports = router;