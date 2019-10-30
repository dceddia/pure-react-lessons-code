import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld() {
  const name = 'Dave';

  return (
    <div className="dark">
      <h1 onDoubleClick={() => console.log('hello')}>
        This is a Hello
      </h1>
      <label htmlFor="email">Email</label>
      <input id="email" />
      <div />
      {/* this works */}
      {
        // works
      }
      hello <strong>{name}</strong>
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
);
