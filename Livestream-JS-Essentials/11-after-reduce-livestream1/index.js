// query string:
//    ?a=5&b=42&c=hello%20world
// Turn it into an object:
// {
//   a: "5",
//   b: "42",
//   c: "hello world"
// }

const search = window.location.search
  .replace('?', '')
  .split('&')
  .map(item => item.split('='))
  .reduce((result, [key, value], index) => {
    // {}   ["a", "5"]
    result[key] = decodeURIComponent(value);
    return result;
  }, {});

// console.log(search);

const sumFn = (previousValue, currentValue) => {
  console.log('previous:', previousValue, 'current:', currentValue);
  return previousValue + currentValue;
};

const nums = [2, 4, 8, 16];
// const sum = nums.reduce(sumFn, 0);
// console.log(sum);

const people = [
  { first: 'Sarah', last: 'Drasner', handle: '@sarah_edo', tweets: 3000 },
  { first: 'Dan', last: 'Abramov', handle: '@dan_abramov', tweets: 9000 },
  { first: 'Ali', last: 'Spittel', handle: '@ASpittel', tweets: 9999 }
];

const minMaxTotalTweets = people.reduce(
  (final, person, index) => {
    console.log('--- this is iteration ---', index);

    console.log('before', final);

    if (person.tweets > final.max) {
      final.nameWithMostTweets = `${person.first} ${person.last}`;
    }

    final.min = person.tweets < final.min ? person.tweets : final.min;
    final.max = person.tweets > final.max ? person.tweets : final.max;
    final.total += person.tweets;

    console.log('after', final);
    return final;
  },
  {
    min: Infinity, // <-- final.min
    max: -Infinity, // <-- final.max
    total: 0,
    nameWithMostTweets: null
  }
);
console.log(minMaxTotalTweets);

const sum = (a, b) => {
  return a + b;
};

function sum(a, b) {
  return a + b;
}
