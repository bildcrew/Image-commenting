import React from 'react';
import CommentBubbles from '../Comments/CommentBubbles.js';
import { v4 as uuidv4 } from 'uuid';
const ImageDisplay = ({ image }) => {
  const [bubbles, setBubbles] = React.useState([]);
  const URL = 'http://localhost:5000';
  React.useEffect(() => {
    async function getImageData() {
      const res = await fetch(`/api/image/${image}`, { method: 'GET' });
      const data = await res.json();
      setBubbles(data.bubbles || []);
    }
    getImageData();
  }, [image]);

  const handleClick = async (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const X = offsetX - 25;
    const Y = offsetY - 25;

    const res = await fetch(`/api/image/${image}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: X, y: Y, bubbleId: uuidv4(), comments: [] }),
    });

    const data = await res.json();
    console.log(data);

    setBubbles([...bubbles, data]);
    console.log(X, Y);
  };

  const submitComment = async (comment, bubbleId) => {
    // const id = uuidv4();
    const res = await fetch(`/api/image/${image}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment, bubbleId }),
    });
    const data = await res.json();
    console.log(data);
    /// array of bubbles
    setBubbles(data.bubbles);
  };

  console.log(bubbles);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <CommentBubbles bubbles={bubbles} submitComment={submitComment} />
      <img onClick={handleClick} src={`${URL}/${image}.jpg`} alt='Pick-img' />
    </div>
  );
};

export default ImageDisplay;
