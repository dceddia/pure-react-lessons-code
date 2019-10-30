import React from 'react';
import { useUser } from './UserContext';

const MessageList = () => {
  const user = useUser();

  return (
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {user.firstName}! 🎉
      </div>
    </div>
  );
};

export default MessageList;
