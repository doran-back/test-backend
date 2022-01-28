const express = require('express');
const router = express.Router();
const Room = require('../../model/Room');

router.get('/', async (req, res, next) => {
  const currentRoom = await Room.find().exec();
  console.log(await currentRoom[0].populate("users"));

  res.render('community', { title: currentRoom });
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
