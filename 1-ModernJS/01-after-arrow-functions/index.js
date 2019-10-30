// a plain old named function
const makeFullName = (first, last) => first + ' ' + last;

const printFullName = (first, last) => console.log(first, last);

// another named function
const createUser = (name, email) => ({
  name,
  email,
  createdAt: Date.now()
});

console.log(createUser('Dave', 'dave@example.com'));
printFullName('A', 'B');
console.log(makeFullName('Dave', 'Ceddia'));

