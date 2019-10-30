const handleErrors = res => {
  if (!res.ok) {
    return res.json().then(error => {
      throw error;
    });
  }
  return res;
};

export const listPets = () => {
  return fetch('http://localhost:3001/pets').then(
    res => res.json()
  );
};

export const createPet = pet => {
  return fetch('http://localhost:3001/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pet)
  })
    .then(handleErrors)
    .then(res => res.json());
};

export const updatePet = pet => {
  console.log(pet);
  return fetch(
    `http://localhost:3001/pets/${pet.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pet)
    }
  )
    .then(handleErrors)
    .then(res => res.json());
};
