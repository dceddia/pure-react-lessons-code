const people = [
  { first: 'Dan', last: 'Abramov', handle: '@dan_abramov' },
  { first: 'Ali', last: 'Spittel', handle: '@ASpittel' },
  { first: 'Sarah', last: 'Drasner', handle: '@sarah_edo' }
];

// make a list of their names

const names = people.filter((person, index) => {
  return person.first !== 'Dan';
});
console.log(names);

// add fullName to each person
