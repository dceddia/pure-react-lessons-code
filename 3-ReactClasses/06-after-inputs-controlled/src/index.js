import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <label>
          Name
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
