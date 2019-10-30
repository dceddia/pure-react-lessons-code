const people = [
  {
    first: 'Dan',
    last: 'Abramov',
    handle: '@dan_abramov'
  },
  {
    first: 'Ali',
    last: 'Spittel',
    handle: '@ASpittel'
  },
  {
    first: 'Sarah',
    last: 'Drasner',
    handle: '@sarah_edo'
  }
];

const names = people.map((person, index) => {
  return {
    ...person,
    first: person.first + '!!!'
  };
});
console.log(names);
console.log(people);
