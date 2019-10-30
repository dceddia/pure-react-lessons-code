// Using the `filter` method on arrays

const spices = [
  { id: 1, name: 'Black Pepper' },
  { id: 2, name: 'Turmeric' },
  { id: 3, name: 'Cumin' },
  { id: 4, name: 'Coriander' },
  { id: 5, name: 'Chili Powder' }
];

const filteredSpices = spices.filter(spice => {
  return spice.name.startsWith('C');
});
console.log(filteredSpices);
console.log(spices);

