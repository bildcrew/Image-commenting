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
// @GET api/image/:id
// @desc get image by id
// public access
router.get('/:name', async (req, res) => {
  try {
    const image = await Images.find({ name: req.params.name });
    return res.status(200).json({ image });
  } catch (error) {
    return res.status(500).send('Bad request');
  }
});

router.put('/:name', async (req, res) => {
  try {
    const { message } = req.body;
    const image = await Images.findOne({ name: req.params.name });
    image.messages.push({ text: message });
    await image.save();
    return res.status(200).send({ image });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Bad request');
  }
});
module.exports = router;
