import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Timer = () => {
  const [time, setTime] = useState('');

  return (
    <div>
      <h1>Timer</h1>
      <input value={time} onChange={e => setTime(e.target.value)} />
    </div>
  );
};

ReactDOM.render(<Timer />, document.querySelector('#root'));
