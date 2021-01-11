const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: { type: String },
  bubbles: [
    {
      id: { type: String },
      x: { type: Number },
      y: { type: Number },
      comments: [
        {
          text: String,
        },
      ],
    },
    { unique: true },
  ],
});

module.exports = mongoose.model('images', imageSchema, 'images');
