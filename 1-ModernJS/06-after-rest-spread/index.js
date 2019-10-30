// Rest & Spread operators
// 2 names for three dots that look the same

function printArgs(first, second, ...rest) {
  console.log(first, second, rest);
}
const nums = [1, 2, 3, 4];
printArgs(nums[0], nums[1], nums[2], nums[3]);

const user = {
  username: 'dceddia',
  lastName: 'Ceddia'
};
console.log({
  firstName: 'Default',
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
});

const DEBUG = false;
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug('this', 'works', 'great');

