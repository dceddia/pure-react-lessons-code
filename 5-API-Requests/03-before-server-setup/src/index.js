import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import staticPets from './pets';
import Pet from './Pet';
import './index.css';

const App = () => {
  const [pets, setPets] = useState(staticPets);

  return (
    <main>
      <h1>Adopt-a-Pet</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <Pet pet={pet} />
          </li>
        ))}
      </ul>
      <button>Add a Pet</button>
    </main>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
