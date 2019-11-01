import React from 'react';

const ItemPage = ({ items, onAddToCart }) => (
  <div className="ItemPage">
    <h2>Items for Sale</h2>
    {items.map(item => (
      <Item
        key={item.id}
        item={item}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

const Item = ({ item, onAddToCart }) => (
  <li className="Item">
    {item.name}
    <span className="price">${item.price}</span>
    <button
      className="add"
      onClick={() => onAddToCart(item)}
    >
      Add to Cart
    </button>
  </li>
);

export default ItemPage;
