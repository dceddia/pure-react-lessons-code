// Rest & Spread operators
// 2 names for three dots that look the same

// Rest to accept infinite args
function printArgs() {
  console.log(arguments);
}
printArgs(1, 2, 3, 4, 5);

// Spread to explode an array or object in place
const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};
