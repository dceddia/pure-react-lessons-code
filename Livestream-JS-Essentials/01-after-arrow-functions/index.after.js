// a plain old named function
const getFullName = (first, last) => first + ' ' + last;

// another named function
const createUser = (name, email) => ({
  name,
  email,
  createdAt: Date.now()
});

// an anonymous function, stored in a variable
const printBestBaseballTeam = team => {
  console.log('Red Sox');
};

// a function that does a few things
// (has more than 1 statement before the return)
const sumNumbers = numbers => {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

console.log(getFullName('Dave', 'Ceddia'));
console.log(createUser('Dave', 'dave@example.com'));
printBestBaseballTeam('Yankees');
console.log(sumNumbers([1, 2, 3]));
