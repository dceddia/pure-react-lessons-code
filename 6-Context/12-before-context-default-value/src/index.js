import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Color = React.createContext();

const FancyButton = props => {
  const color = useContext(Color);

  return (
    <button
      className={`fancy-btn ${color}`}
      {...props}
    >
      Click Me
    </button>
  );
};

const App = () => (
  <div>
    <FancyButton />
    <Color.Provider value="red">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="green">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="blue">
      <FancyButton />
    </Color.Provider>
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
