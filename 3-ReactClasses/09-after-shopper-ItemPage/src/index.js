import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import ItemPage from './ItemPage';
import './index.css';

const products = [
  { id: 1, name: 'Phone', price: 299 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Headphones', price: 99 },
  { id: 4, name: 'Camera', price: 799 }
];

const App = () => (
  <div className="App">
    <NavBar />
    <main>
      <ItemPage items={products} />
    </main>
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
