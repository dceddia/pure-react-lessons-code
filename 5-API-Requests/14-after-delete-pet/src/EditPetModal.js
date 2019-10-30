import React from 'react';
import Modal from 'react-modal';
import PetForm from './PetForm';

const EditPetModal = ({ pet, onCancel, onSave }) => {
  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
      <h2>Edit Pet</h2>
      <PetForm
        pet={pet}
        onCancel={onCancel}
        onSave={onSave}
      />
    </Modal>
  );
};

export default EditPetModal;
