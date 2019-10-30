const numbers = [1, 2, 3, 4];
const moreNumbers = [5, 6, 7, 8];

// console.log(numbers.push(1000))  // modifies 'numbers'

// a few ways to add items to an array immutably:
console.log(numbers.concat(1000));
console.log(numbers.concat(1000, 200, 300));
console.log(numbers.concat(moreNumbers));
console.log([
    0,
    ...numbers,
    4.5,
    ...moreNumbers,
    9
]);
console.log(numbers);


