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

  const addPet = async ({ name, kind, photo }) => {
    setPets([
      ...pets,
      {
        id: Math.random(),
        name,
        kind,
        photo
      }
    ]);
    setNewPetOpen(false);
  };

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
          onCancel={() => setNewPetOpen(false)}
          onSave={addPet}
        />
      )}
    </main>
  );
};

const el = document.querySelector('#root');
Modal.setAppElement(el);
ReactDOM.render(<App />, el);
