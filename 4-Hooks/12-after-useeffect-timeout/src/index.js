import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Timer = () => {
  const [time, setTime] = useState('');
  const [random, setRandom] = useState('');

  useEffect(() => {
    let timer;
    if (!isNaN(time) && time > 0) {
      console.log('set new timer', time);
      timer = setInterval(() => {
        console.log('tick', time);
      }, time);
    }

    return () => {
      console.log('clear!');
      clearInterval(timer);
    };
  }, [time]);

  console.log('render');

  return (
    <div>
      <h1>Timer</h1>
      <input value={time} onChange={e => setTime(e.target.value)} />
      <button onClick={() => setRandom(Math.random())}>Render</button>
    </div>
  );
};

ReactDOM.render(<Timer />, document.querySelector('#root'));
