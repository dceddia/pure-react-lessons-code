// just 'export' to make a named function/variable available
export function printName(user) {
  console.log(`${user.firstName} ${user.lastName}`);
}

// 'export default' to set the default export
export default function sayHi() {
  console.log('hi');
}

// you can only export one default
// this would be an error
// export default function sayBye() {
//   console.log('bye');
// }

// you can export variables & constants
export const BASE_URL = 'https://egghead.io';

// exports can't be conditional
if (true) {
  // this is an error
  // export const NAME = sayHi();
}
