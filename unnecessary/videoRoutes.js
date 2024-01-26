const express = require('express');
const Video = require('./VideoModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const video = await Video.find()
  res.send(video[0])
})

router.put('/url', async (req, res) => {
  const video = await Video.find()
  video[0].url = req.body.url
  await video[0].save()
  res.send(video[0])
})

router.put('/time', async (req, res) => {
  const video = await Video.find()
  video[0].url = req.body.time
  await video[0].save()
  res.send(video[0])
})

router.put('/status', async (req, res) => {
  const video = await Video.find()
  video[0].url = req.body.status
  await video[0].save()
  res.send(video[0])
})

module.exports = router;