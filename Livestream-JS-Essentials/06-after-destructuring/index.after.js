const nums = [1, 2, 3, 4];
const user = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia'
};

// manually vs. destructuring
// const username = user.username;
const { username } = user;
console.log(username);

// destructure multiple properties
const { firstName, lastName } = user;
console.log(firstName, lastName);

// pluck out one, and put the rest in `name`
// good way to remove keys from an object
const { username, ...name } = user;
console.log(name);

// destructure arrays too
const [a, b] = nums;
console.log(a, b);

// ...rest works here also
const [a, b, ...rest] = nums;
console.log(a, b, rest);

// the old way, picking apart options
function print(opts) {
  const quiet = opts.quiet || true;
  const quiet = typeof opts.quiet !== 'undefined' ? opts.quiet : false;
  const message = opts.message || '';

  if (!quiet) {
    console.log(message);
  }
}

// destructuring with defaults makes it easy
function print({ quiet = true, message = '' }) {
  if (!quiet) {
    console.log(message);
  }
}
print({
  quiet: false,
  message: 'hi'
});
