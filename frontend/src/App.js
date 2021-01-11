import React from 'react';

import ImageDisplay from './Components/ImageDisplay/ImageDisplay';
import './App.css';
function App() {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className='App'>
      <select onChange={handleChange}>
        <option value=''>-</option>
        <option value='dog'>dog</option>
        <option value='map'>map</option>
        <option value='cat'>cat</option>
      </select>
      <ImageDisplay />
    </div>
  );
}

export default App;
