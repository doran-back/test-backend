const express = require('express');
const router = express.Router();
const User = require('../../model/User')

router.get('/', (req, res, next) => {
  res.send('auth-mainpage');
});

router.get('/login', async (req, res, next) => {
  const existUser = await User.find();
  res.render('login', { title: existUser })
});

module.exports = router;
