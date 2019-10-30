import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import NewPetModal from './NewPetModal';
import Pet from './Pet';
import './index.css';

const App = () => {
  const [pets, setPets] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(
    false
  );
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(pets => setPets(pets))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Adopt-a-Pet</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <ul>
            {pets.map(pet => (
              <li key={pet.id}>
                <Pet pet={pet} />
              </li>
            ))}
          </ul>
          <button onClick={() => setNewPetOpen(true)}>
            Add a Pet
          </button>
        </>
      )}
      {isNewPetOpen && (
        <NewPetModal
          isOpen={isNewPetOpen}
          onCancel={() => setNewPetOpen(false)}
        />
      )}
    </main>
  );
};

const el = document.querySelector('#root');
Modal.setAppElement(el);
ReactDOM.render(<App />, el);
