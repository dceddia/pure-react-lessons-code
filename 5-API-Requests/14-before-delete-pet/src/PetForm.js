import React, { useState, useRef } from 'react';

const PetForm = ({ pet, onSave, onCancel }) => {
  const initialPet = pet || {
    name: '',
    kind: '',
    photo: null
  };
  const [name, setName] = useState(initialPet.name);
  const [kind, setKind] = useState(initialPet.kind);
  const [photo, setPhoto] = useState(initialPet.photo);
  const [errors, setErrors] = useState(null);
  const [saving, setSaving] = useState(false);
  const photoInput = useRef();

  const updatePhoto = () => {
    const file =
      photoInput.current.files &&
      photoInput.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const submit = event => {
    event.preventDefault();
    setSaving(true);
    onSave({
      ...pet,
      name,
      kind,
      photo
    }).catch(error => {
      console.log(error);
      setErrors(error);
      setSaving(false);
    });
  };

  return (
    <form className="pet-form" onSubmit={submit}>
      {photo && <img alt="the pet" src={photo} />}
      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        id="photo"
        ref={photoInput}
        onChange={updatePhoto}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {errors && errors.name && (
        <div className="error">{errors.name}</div>
      )}
      <label htmlFor="kind">Kind</label>
      <select
        name="kind"
        id="kind"
        value={kind}
        onChange={e => setKind(e.target.value)}
      >
        <option value="">Choose a kind</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      {errors && errors.kind && (
        <div className="error">{errors.kind}</div>
      )}
      <button
        disabled={saving}
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button disabled={saving} type="submit">
        Save
      </button>
    </form>
  );
};

export default PetForm;
