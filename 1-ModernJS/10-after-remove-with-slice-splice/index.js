const word = ['c', 'o', 'd', 'e'];
let copy = [...word];
copy.splice(1, 2, 'x', 'y');
console.log(copy);
console.log(word);

