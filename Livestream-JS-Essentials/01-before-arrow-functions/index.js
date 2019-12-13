// a plain old named function
function getFullName(first, last) {
  return first + ' ' + last;
}

// another named function
function createUser(name, email) {
  return {
    name: name,
    email: email,
    createdAt: Date.now()
  };
}

// an anonymous function, stored in a variable
var printBestBaseballTeam = function(team) {
  console.log('Red Sox');
};

// a function that does a few things
// (has more than 1 statement before the return)
function sumNumbers(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(getFullName('Dave', 'Ceddia'));
console.log(createUser('Dave', 'dave@example.com'));
printBestBaseballTeam('Yankees');
console.log(sumNumbers([1, 2, 3]));
