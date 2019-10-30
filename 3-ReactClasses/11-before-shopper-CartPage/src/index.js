import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import ItemPage from './ItemPage';
import NavBar from './NavBar';
import CartPage from './CartPage';
import './index.css';

const products = [
  { id: 1, name: 'Phone', price: 299 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Headphones', price: 99 },
  { id: 4, name: 'Camera', price: 799 }
];

const history = createBrowserHistory();

const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
  </div>
);
const App = ({ location }) => (
  <div className="App">
    <NavBar history={history} />
    <main>
      {location.pathname === '/' ? (
        <ItemPage items={products} />
      ) : location.pathname === '/cart' ? (
        <CartPage />
      ) : (
        <NotFound />
      )}
    </main>
  </div>
);

function render(location) {
  ReactDOM.render(
    <App location={location} />,
    document.querySelector('#root')
  );
}
render(history.location);
history.listen(render);
