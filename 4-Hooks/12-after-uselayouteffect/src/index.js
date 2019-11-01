import React, {
  useState,
  useLayoutEffect
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TwoStageRender = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return (
    <div onClick={() => setValue(0)}>
      value: {value}
    </div>
  );
};

ReactDOM.render(
  <TwoStageRender />,
  document.querySelector('#root')
);
