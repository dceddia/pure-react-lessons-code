import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Chat extends React.Component {
  state = {
    messages: []
  };

  constructor(props) {
    super(props);
    this.chatRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      this.state.messages.length >
      prevState.messages.length
    ) {
      const chat = this.chatRef.current;
      return chat.scrollHeight - chat.scrollTop;
    }

    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chat = this.chatRef.current;
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }

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
        <div className="chat" ref={this.chatRef}>
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
