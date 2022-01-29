const express = require('express');
const router = express.Router();
const User = require('../../model/User');
const Room = require('../../model/Room');
const Community = require('../../model/community');

router.get('/', async (req, res, next) => {
  // const existUser = await User.find();

  // console.log(existUser);
  // res.render('community', { title: existUser });

  // Room -> users (populate)
  // const currentRoom = await Room.find().exec();
  // console.log(await currentRoom[0].populate('users'));

  // res.render('community', { title: currentRoom });

  // Community -> rooms (populate)
  const currentCommunity = await Community.find().populate('rooms');

  console.log(await currentCommunity[0].rooms[0].populate('users'))
  res.render('community', { title: currentCommunity})
});

router.post('/', (req, res, next) => {
  res.send('post-room info');
});

router.get('/:roomId', (req, res, next) => {
  res.send('post-room room id');
});

router.get('/:roomId/videoChat', (req, res, next) => {
  res.send('post-room videochat');
});

module.exports = router;
