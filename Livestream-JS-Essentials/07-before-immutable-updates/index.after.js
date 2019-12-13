const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};

// mutable update
user.fullName = `${user.firstName} ${user.lastName}`;
console.log(user);

// same thing, in a function
// no way to know the user changed!
function addFullName(user) {
  user.fullName = `${user.firstName} ${user.lastName}`;
  return user;
}
console.log('mutated', addFullName(user) === user);

// better way
const addFullNameBetter = user => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`
  };
};
console.log('immutable', addFullNameBetter(user) === user);
