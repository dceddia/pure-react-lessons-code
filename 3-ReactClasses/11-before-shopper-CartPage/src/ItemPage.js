import React from 'react';

const ItemPage = ({ items }) => (
  <div className="ItemPage">
    <h2>Items for Sale</h2>
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);

const Item = ({ item }) => (
  <li className="Item">
    {item.name}
    <span className="price">${item.price}</span>
    <button className="add">Add to Cart</button>
  </li>
);

export default ItemPage;
