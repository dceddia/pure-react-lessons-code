import React from 'react';
import ReactDOM from 'react-dom';

function Custom() {
  return <span>custom</span>;
}

function HelloWorld() {
  const name = 'Dave';

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'This is a Hello'),
    'hello ',
    React.createElement('strong', null, name),
    React.createElement(Custom)
  );
  return (
    <div>
      <h1>This is a Hello</h1>
      hello <strong>{name}</strong>
      <Custom />
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
);
