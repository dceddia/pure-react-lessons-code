import React, { useState, useContext } from 'react';

const NotifyContext = React.createContext();

export function NotifyProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = text => {
    setMessages(msgs => [
      ...msgs,
      {
        id: Math.random(),
        text
      }
    ]);
  };

  const removeMessage = msg => {
    setMessages(messages =>
      messages.filter(m => m !== msg)
    );
  };

  const value = {
    messages,
    addMessage
  };

  return (
    <NotifyContext.Provider value={value}>
      <div className="notification-wrapper">
        <ul>
          {messages.map(msg => (
            <Notification
              key={msg.id}
              message={msg}
              onClose={() => removeMessage(msg)}
            />
          ))}
        </ul>
      </div>
      {children}
    </NotifyContext.Provider>
  );
}

const Notification = ({ message, onClose }) => (
  <li>
    {message.text}
    <button className="close" onClick={onClose}>
      &times;
    </button>
  </li>
);

export function useNotify() {
  return useContext(NotifyContext);
}
