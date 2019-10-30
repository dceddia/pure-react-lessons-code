import React from 'react';
import Item from './Item';

const ItemPage = ({ items, onAddToCart }) => (
  <div className="ItemPage">
    <h2>Items for Sale</h2>
    {items.map(item => (
      <Item
        key={item.id}
        item={item}
        onAddToCart={onAddToCart}
      >
        <button
          className="add"
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </button>
      </Item>
    ))}
  </div>
);

export default ItemPage;
