import React from 'react';

const Pet = ({ pet, onEdit, onRemove }) => {
  return (
    <div className="pet">
      {pet.photo ? (
        <img
          src={pet.photo}
          alt=""
          className="pet-photo sm"
        />
      ) : (
        <div className="no-photo">?</div>
      )}
      <button className="pet-name" onClick={onEdit}>
        {pet.name}
      </button>
      <div className="pet-kind">{pet.kind}</div>

      <button className="adopt-btn" onClick={onRemove}>
        <span role="img" aria-label="adopt this pet">
          🏠
        </span>
      </button>
    </div>
  );
};

export default Pet;
