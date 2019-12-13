const items = [1, 2, 3];
const places = [
  { name: 'Boston', pop: 1000000 },
  { name: 'Portland', pop: 1231273812389213 },
  { name: 'Boise', pop: 8 }
];

let foundBoston = false;
for (let i = 0; i < places.length; i++) {
  if (places[i].name === 'Boston') {
    foundBoston = true;
    break;
  }
}

places.forEach(item => {
  if (item.name === 'Boston') {
    foundBoston = true;
    throw 'done';
  }
});

const hasBoston = !!places.find(item => item.name === 'Boston');
console.log(hasBoston);

// Add an item to an array
const newArray = [...items];
const newPlaces = [...places];
const removedItems = newPlaces.splice(2, 1, 'San Fran');
// console.log(places, newPlaces, removedItems);

// Combine 2 arrays

const itemsAndPlaces = [...items, ...places];
console.log(itemsAndPlaces);

// Copy an array
let copy = items.slice();
copy = [].concat(items);

// Remove an item, beginning or end
