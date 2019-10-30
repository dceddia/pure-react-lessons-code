import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function rollDie(sides) {
  return Math.floor(Math.random() * sides + 1);
}

class Dice extends React.Component {
  state = {
    dice: ['–', '–']
  };

  roll = () => {
    this.setState({
      dice: [rollDie(6), rollDie(6)]
    });
  };

  render() {
    const { dice } = this.state;

    return (
      <>
        <div className="dice">
          <span>{dice[0]}</span>
          <span>{dice[1]}</span>
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.querySelector('#root')
);
