import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  const name = 'Dave';

  return (
    <>
      <div>
        <h1>This is a {name} Hello</h1>
        hello
        <strong>
          {name + '!'} {1 + 2}
        </strong>
      </div>
      <span>another element</span>
    </>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
);
