// Template Strings a.k.a. String Interpolation

const firstName = 'Dave';
const lastName = 'Ceddia';
const usesReact = false;

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const summary = `${fullName} ${usesReact ? 'uses React' : "doesn't use React"}`;
console.log(summary);

const add = (a, b) => a + b;
const answer = `The answer is ${add(40, 2)}`;
console.log(answer);
