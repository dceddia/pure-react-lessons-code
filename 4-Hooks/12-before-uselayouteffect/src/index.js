import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TwoStageRender = () => {
  const [value, setValue] = useState(0);

  console.log('render', value);

  return <div>value: {value}</div>;
};

ReactDOM.render(
  <TwoStageRender />,
  document.querySelector('#root')
);
