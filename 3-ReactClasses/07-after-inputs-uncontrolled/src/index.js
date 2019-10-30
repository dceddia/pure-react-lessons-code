import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input ref={this.inputRef} />
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
