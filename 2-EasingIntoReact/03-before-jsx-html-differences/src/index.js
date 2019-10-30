import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  const name = 'Dave';

  return (
    <div>
      <h1>This is a Hello</h1>
      hello <strong>{name}</strong>
    </div>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
