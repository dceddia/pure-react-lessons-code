import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time';
import './index.css';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem file={file} key={file.id} />
      ))}
    </tbody>
  </table>
);

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

const CommitMessage = ({ commit }) => (
  <td className="commit-message">{commit.message}</td>
);

const FileName = ({ file }) => (
  <>
    <td className="file-icon">
      <FileIcon file={file} />
    </td>
    <td className="file-name">{file.name}</td>
  </>
);

const FileIcon = ({ file }) => {
  let icon;
  switch (file.type) {
    case 'folder':
      icon = 'fa-folder';
      break;
    default:
    case 'file':
      icon = 'fa-file-text-o';
  }

  return <i className={`fa ${icon}`} />;
};

const data = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2019-07-07 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2019-07-07 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2019-07-01 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  }
];

ReactDOM.render(
  <FileList files={data} />,
  document.querySelector('#root')
);
