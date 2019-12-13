// Rest & Spread operators
// 2 names for three dots that look the same

// // Rest to accept infinite args
// function printArgs(...args) {
//   // console.log(first, second, third, args);
// }
// const numbers = [1, 2, 3, 4, 5, 7];
// printArgs(...numbers);

// // Spread to explode an array or object in place
// const nums = [1, 2, 3, 4];
// const user = {
//   username: 'dceddia',
//   // firstName: 'Dave',
//   lastName: 'Ceddia'
// };

// console.log(nums[0], nums[1], nums[2], nums[3]);
// console.log(...nums);
// console.log({
//   firstName: 'Default',
//   ...user,
//   fullName: `${user.firstName} ${user.lastName}`
// });

const f = (...args) => {
  console.log(args);
};
f(1, 2, 3);
f(...[1, 2, 3]);
