// Rest & Spread operators
// 2 names for three dots that look the same

// Rest to accept infinite args
// function printArgs(...args) {
function printArgs(first, second, ...rest) {
  console.log(arguments); // not a real array
  console.log(Array.from(arguments)); // real array!
  //console.log(args); // also a real array! (from ...args)
  console.log(first, second, rest); // rest holds varargs
}
printArgs(1, 2, 3, 4, 5);

// Spread to explode an array or object in place
const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};

// spread arrays
console.log(nums[0], nums[1], nums[2], nums[3]);
console.log(...nums);

// spread objects
console.log(user); // ok
// console.log(...user); // nope
console.log({ ...user }); // ok but why?
console.log({ ...user, fullName: `${user.firstName} ${user.lastName}` });
const user2 = { ...user, fullName: `${user.firstName} ${user.lastName}` };
console.log('same?', user === user2);
