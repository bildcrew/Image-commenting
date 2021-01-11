import React from 'react';

const ImageDisplay = () => {
  return (
    <div>
      <CommentBubbles />
      <img src={'http://localhost:5000/cat.jpg'} alt='Pick an image' />
    </div>
  );
};

export default ImageDisplay;
