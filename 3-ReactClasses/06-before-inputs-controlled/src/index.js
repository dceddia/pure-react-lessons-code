import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {'~someone~'}</h1>
        <label>
          <input type="text" />
        </label>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
