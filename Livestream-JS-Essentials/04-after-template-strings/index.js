// Template Strings a.k.a. String Interpolation

const firstName = 'Dave';
const lastName = 'Ceddia';

const add = (a, b) => a + b;

const fullName = `${firstName} ${lastName} .${false && 'yay'}.`;
console.log(fullName);
