const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia',
  posts: [1, 2, 3]
};

console.log(user);

// mutating  === changing
// user.firstName = 'Not Dave';
// console.log(user);

function changeName(user, newName) {
  const copy = Object.assign({}, user, {
    firstName: newName,
    posts: [...user.posts, 9438543],
    fullName: 'whatever'
  });

  return copy;
}

const newUser = changeName(user, 'Not Dave');
console.log(newUser);
console.log(user === newUser);
console.log(user.posts === newUser.posts);
