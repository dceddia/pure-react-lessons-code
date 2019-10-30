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
        <History value={dice} />
      </>
    );
  }
}

class History extends React.Component {
  state = {
    history: []
  };

  static getDerivedStateFromProps(props, state) {
    return {
      history: [
        ...state.history,
        {
          id: Math.random(),
          value: props.value
        }
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.history.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <Dice />,
  document.querySelector('#root')
);
