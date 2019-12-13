const items = [1, 2, 3];
const places = ['Boston', 'Portland', 'Boise'];

// Add an item to an array
items.push(4); // mutates the array
console.log(items);

// new array!
const newItems = [...items, 5];
console.log(items);
console.log(newItems);

// Or to the front:
items.unshift(0);
console.log(items);
// versus:
const moreItems = [-1, ...items];
console.log(moreItems);

// Combine 2 arrays
const combo = [...items, ...places];
console.log(combo);

// Copy an array
let copy = [...items];
copy = items.splice();
copy = [].concat(items);

// Remove an item, beginning or end
places.pop();
console.log(places);
places.shift();
console.log(places);
// versus:
console.log(places.slice(1)); // remove first
console.log(places.slice(0, -1)); // remove last
