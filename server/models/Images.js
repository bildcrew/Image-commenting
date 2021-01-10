const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  bubbles: [
    {
      id: { type: Number },
      comments: [
        {
          text: String,
        },
      ],
    },
  ],
});
