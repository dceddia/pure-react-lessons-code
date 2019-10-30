import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reducer = (state, action) => {
  switch (action) {
    case 'on':
      return true;
    case 'off':
      return false;
    default:
      return state;
  }
};

function Room() {
  const [light, dispatch] = useReducer(reducer, true);

  return (
    <div className={`room ${light ? 'lit' : 'unlit'}`}>
      <h1>Room</h1>
      <button onClick={() => dispatch('on')}>ON</button>
      <button onClick={() => dispatch('off')}>OFF</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector('#root'));
