import React from 'react';

const NavBar = ({ cartCount }) => (
  <nav>
    <ul>
      <li>Store</li>
      <li className="cart-count">
        <span role="img" aria-label="items in cart">
          🛒
        </span>{' '}
        {cartCount === 0 ? 'Empty' : cartCount}
      </li>
    </ul>
  </nav>
);

export default NavBar;
