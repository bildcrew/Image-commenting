const router = require('express').Router();
const Images = require('../models/Images');
// @GET api/image/
// @desc get all images
// public access
router.get('/', async (req, res) => {
  try {
    const images = await Images.find({});
    return res.status(200).json({ images });
  } catch (error) {
    return res.status(500).send('Bad request');
  }
});
// @GET api/image/:name
// @desc get bubbles of image by name
// public access
router.get('/:name', async (req, res) => {
  try {
    const image = await Images.findOne({ name: req.params.name });
    console.log(image);
    return res.status(200).json({ bubbles: image.bubbles });
  } catch (error) {
    return res.status(500).send('Bad request');
  }
});
// @PUT api/image/:id
// @desc creating a bubble
// public access
router.post('/:name', async (req, res) => {
  try {
    const image = await Images.findOne({ name: req.params.name });
    image.bubbles.push({
      id: req.body.bubbleId,
      comments: req.body.comments,
      x: req.body.x,
      y: req.body.y,
    });
    await image.save();
    return res.status(200).send(image.bubbles.pop());
  } catch (error) {
    console.log(error);
  }
});

// @PUT api/image/:id
// @desc updating comments of image bubble
// public access
router.put('/:name', async (req, res) => {
  try {
    // return res.status(200);
    const image = await Images.findOne({ name: req.params.name });
    if (image.bubbles.length > 0)
      image.bubbles = image.bubbles.map((bubble) => {
        if (bubble.id === req.body.bubbleId) {
          bubble.comments.push({ text: req.body.comment });
        }
        return bubble;
      });
    else console.log('nothing');
    await image.save();
    return res.status(200).send({ bubbles: image.bubbles });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Bad request');
  }
});

module.exports = router;
