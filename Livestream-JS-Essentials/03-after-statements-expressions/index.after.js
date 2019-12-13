// Statements vs. Expressions

let a, b; // <- this is a statement

// also a statement:
function doStuff() {
  console.log('stuff');
}

// expressions result in a value
// if you can return it, or set something equal to it, it's an expression
a = 5;
b = [1, 2, 3];

// statements don't result in a value
if (true) {
  a = 5;
}

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// some statements can be rewritten as expressions... like if:
if (Math.random() < 0.5) {
  a = 'yes';
} else {
  a = 'no';
}
// can be rewritten with the ternary operator:
a = Math.random() < 0.5 ? 'yes' : 'no';

// or the sum for loop, written with Array's .reduce
console.log(numbers.reduce((sum, number) => sum + number));
