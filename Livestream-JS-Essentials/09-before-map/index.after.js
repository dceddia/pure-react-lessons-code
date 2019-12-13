const people = [
  { first: 'Dan', last: 'Abramov', handle: '@dan_abramov' },
  { first: 'Ali', last: 'Spittel', handle: '@ASpittel' },
  { first: 'Sarah', last: 'Drasner', handle: '@sarah_edo' }
];

// make a list of their names
// let names = [];
// for (let i = 0; i < people.length; i++) {
//   names.push(people[i].first + ' ' + people[i].last);
// }

// after:
const names = people.map(person => {
  return person.first + ' ' + person.last;
});

// add fullName to each person
// const peopleWithFullname = people.map(person => {
//   person.fullName = `${person.first} ${person.last}`;
//   return person;
// });
// console.log(peopleWithFullname === people); // false. makes sense
// console.log(peopleWithFullname[0] === people[0]); // true. kind of a lie.

// now do it immutably
const peopleWithFullname = people.map(person => {
  return {
    ...person,
    fullName: `${person.first} ${person.last}`
  };
});
console.log(peopleWithFullname === people); // false. makes sense
console.log(peopleWithFullname[0] === people[0]); // false. awesome.
