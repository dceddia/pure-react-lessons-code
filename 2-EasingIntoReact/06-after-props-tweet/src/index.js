import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}

function Avatar({ hash }) {
  return (
    <img
      src={`https://www.gravatar.com/avatar/${hash}`}
      className="avatar"
      alt="avatar"
    />
  );
}

const Time = ({ time }) => (
  <span className="time">
    {moment(time).fromNow()}
  </span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">{count}</span>
    );
  }

  return null;
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && (
      <span className="like-count">{count}</span>
    )}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const data = {
  message: 'A tweet about something cool',
  gravatar: '5c3dd2d257ff0e14dbd2583485dbd44b',
  author: {
    handle: 'dceddia',
    name: 'Dave Ceddia'
  },
  likes: 17,
  retweets: 3,
  timestamp: '2019-07-10 21:24:37'
};

ReactDOM.render(
  <Tweet tweet={data} />,
  document.querySelector('#root')
);
