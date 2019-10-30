import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback
} from 'react';

const NotifyContext = React.createContext();

export function NotifyProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback(text => {
    setMessages(msgs => [
      ...msgs,
      {
        id: Math.random(),
        text,
        addedAt: new Date().getTime()
      }
    ]);
  }, []);

  const removeMessage = useCallback(msg => {
    setMessages(messages =>
      messages.filter(m => m !== msg)
    );
  }, []);

  useEffect(() => {
    const cleanup = () => {
      const now = new Date().getTime();
      setMessages(msgs =>
        msgs.filter(m => now - m.addedAt < 3000)
      );
    };
    const timer = setInterval(cleanup, 6000);

    return () => clearInterval(timer);
  }, []);

  const value = useMemo(
    () => ({
      messages,
      addMessage
    }),
    [messages, addMessage]
  );

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
