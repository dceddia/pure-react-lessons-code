import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <br />
          <input />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
