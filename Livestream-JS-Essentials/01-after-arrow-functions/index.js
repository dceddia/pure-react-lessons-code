// a plain old named function
const getFullName = (first, last) => first + ' ' + last;

// another named function
function createUser(name, email) {
  return {
    name: name,
    email: email,
    createdAt: Date.now()
  };
}

// an anonymous function, stored in a variable
// var printBestBaseballTeam = function(team) {
//   console.log('Red Sox');
// };

const printA = (i = 0) => {
  console.log(i);
  printA;
};
const printB = function() {
  console.log(this);
};
// printA.bind({ hi: 'A' })();
// printB.bind({ hi: 'B' })();

// a function that does a few things
// (has more than 1 statement before the return)
function sumNumbers(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// console.log(getFullName('Dave', 'Ceddia'));
// console.log(createUser('Dave', 'dave@example.com'));
// console.log(printBestBaseballTeam('Yankees'));
// console.log(sumNumbers([1, 2, 3]));
