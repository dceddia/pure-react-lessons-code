import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const IconButton = () => (
  <button>
    <i className="fa fa-cloud" /> Click Me
  </button>
);

const App = () => (
  <>
    <IconButton />
  </>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
