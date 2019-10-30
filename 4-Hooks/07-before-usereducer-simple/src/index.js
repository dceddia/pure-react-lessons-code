import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  return (
    <div className="room lit">
      <h1>Room</h1>
      <button>ON</button>
      <button>OFF</button>
    </div>
  );
}

ReactDOM.render(
  <Room />,
  document.querySelector('#root')
);
