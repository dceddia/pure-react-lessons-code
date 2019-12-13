// Destructuring arrays and objects

const nums = [1, 2, 3, 4, 5];
// const user = {
//   username: 'dceddia',
//   firstName: 'Dave',
//   lastName: 'Ceddia'
// };

// const username = user.username;
// const firstName = user.firstName;
// const { username: uname, ...name } = user;
// console.log(uname, name);

// const [a, b, ...rest] = nums;
// console.log(a, b, rest);

const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
  // post: { id: 1, title: 'Post 1' }
};

const { post = {} } = user;
// console.log(post.id);

function print({ message }) {
  console.log(message);
}
print({ message: 'hi' });

function Item({ className }) {}
