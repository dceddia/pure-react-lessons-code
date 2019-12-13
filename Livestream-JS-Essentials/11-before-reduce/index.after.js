// query string:
//    ?a=5&b=42&c=hello%20world
// Turn it into an object:
// {
//   a: "5",
//   b: "42",
//   c: "hello world"
// }

let searchParams = {};
const search = window.location.search
  .replace(/^\?/, '')
  .split('&')
  .map(item => item.split('='))
  .forEach(([key, value]) => {
    searchParams[key] = decodeURIComponent(value);
  });
console.log(search);

// using Array reduce:
const search2 = window.location.search
  .replace(/^\?/, '')
  .split('&')
  .map(item => item.split('='))
  .reduce((result, [key, value]) => {
    return {
      ...result,
      [key]: decodeURIComponent(value)
    };
  }, {});
console.log(search2);

// Turn an object into an array
const spices = {
  1: { id: 1, name: 'Black Pepper' },
  2: { id: 2, name: 'Turmeric' },
  3: { id: 3, name: 'Cumin' },
  4: { id: 4, name: 'Coriander' },
  5: { id: 5, name: 'Chili Powder' }
};

// 3 useful Object functions:
console.log('keys', Object.keys(spices));
console.log('values', Object.values(spices));
console.log('entries', Object.entries(spices));
// can't do  spices.keys() etc.

// min/max/average with reduce
const nums = [1, 1, 2, 5, 8, 13];
const [min, max, avg] = nums.reduce(
  ([min, max, avg], num, index) => {
    return [
      num < min ? num : min, // min
      num > max ? num : max, // max
      index === nums.length - 1 // average
        ? (avg + num) / nums.length
        : avg + num
    ];
  },
  [Infinity, -Infinity, 0]
);
console.log(min, max, avg);
