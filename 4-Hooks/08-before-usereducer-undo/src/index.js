import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ShoppingList = () => {
  return (
    <main>
      <h1>Shopping List</h1>
      <div className="add-product">
        <label htmlFor="product">Product</label>
        <input type="text" id="product" />
        <button>Add</button>
      </div>
      <div className="actions">
        <button>Undo</button>
        <button>Redo</button>
      </div>
    </main>
  );
};

ReactDOM.render(
  <ShoppingList />,
  document.querySelector('#root')
);
