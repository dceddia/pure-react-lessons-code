const spices = [
  { id: 1, name: 'Black Pepper' },
  { id: 2, name: 'Turmeric' },
  { id: 3, name: 'Cumin' },
  { id: 4, name: 'Coriander' },
  { id: 6, name: 'Coriander' },
  { id: 7, name: 'Coriander' },
  { id: 5, name: 'Chili Powder' }
];

const spiceIndex = spices.findIndex(spice => {
  return spice.name === 'Coriander';
});

const spice = spices.find(spice => {
  return spice.name === 'Coriander';
});

console.log(spice, spiceIndex);

