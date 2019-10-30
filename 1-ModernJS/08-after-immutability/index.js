const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia',
  posts: ['a', 'b', 'c']
};

function setName(user, newName) {
  return {
    ...user,
    firstName: newName,
    posts: [...user.posts, 'd']
  };
}
console.log(user);
const newUser = setName(user, 'someone else');
console.log(newUser);
console.log(user === newUser);
console.log(user.posts === newUser.posts);

