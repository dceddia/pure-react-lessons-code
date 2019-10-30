import React from 'react';

function Avatar({ hash }) {
  return (
    <img
      src={`https://www.gravatar.com/avatar/${hash}`}
      className="avatar"
      alt="avatar"
    />
  );
}

export default Avatar;
