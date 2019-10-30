import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Chat extends React.Component {
  state = {
    messages: []
  };

  addMessage = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          id: Math.random(),
          text: 'A new awesome message'
        }
      ]
    });
  };

  render() {
    const { messages } = this.state;

    console.log(
      '[render]',
      `${messages.length} messages`
    );

    return (
      <>
        <div className="chat">
          {messages.map(msg => (
            <div key={msg.id}>{msg.text}</div>
          ))}
        </div>
        <button onClick={this.addMessage}>
          Add Message
        </button>
      </>
    );
  }
}

ReactDOM.render(
  <Chat />,
  document.querySelector('#root')
);
