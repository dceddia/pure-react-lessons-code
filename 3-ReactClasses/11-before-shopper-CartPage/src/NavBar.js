import React from 'react';

const NavBar = ({ history }) => {
  const go = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/" onClick={go}>
            Store
          </a>
        </li>
        <li>
          <a href="/cart" onClick={go}>
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
