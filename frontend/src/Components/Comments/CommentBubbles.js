import React from 'react';
import styles from './comments.module.css';
const CommentBubbles = ({ bubbles, submitComment }) => {
  const handleKeyPress = (e, bubbleId) => {
    if (e.key === 'Enter') {
      submitComment(e.target.value, bubbleId);
      e.target.value = '';
    }
  };

  return (
    bubbles.length > 0 &&
    bubbles.map((bubble) => (
      <div
        key={bubble.id}
        className={styles.bubble}
        style={{ top: bubble.y + 'px', left: bubble.x + 'px' }}
      >
        <div style={{ left: '60px', position: 'relative' }}>Comments</div>
        <div
          style={{
            left: '60px',
            position: 'relative',
            padding: '5px',
            backgroundColor: 'black',
          }}
        >
          {/* <div style={{ position: 'relative' }}> */}
          {bubble.comments.map((comment) => (
            <div key={comment._id} className={styles.comment}>
              {comment.text}
            </div>
          ))}
          {/* </div> */}
          <input
            type='text'
            placeholder='enter your comment here'
            style={{ position: 'relative' }}
            onKeyPress={(e) => handleKeyPress(e, bubble.id)}
          />
        </div>
      </div>
    ))
  );
};

export default CommentBubbles;
