import React from 'react';

import ImageDisplay from './Components/ImageDisplay/ImageDisplay';
import styles from './App.css';
function App() {
  const handleChange = (e) => {
    // console.log(e);
    setOption(e.target.value);
  };
  const [option, setOption] = React.useState('');

  return (
    <div className='App'>
      <div style={styles.content}>
        <select onChange={handleChange}>
          <option value=''>-</option>
          <option value='dog'>dog</option>
          <option value='map'>map</option>
          <option value='cat'>cat</option>
        </select>
        <ImageDisplay image={option} />
      </div>
    </div>
  );
}

export default App;
