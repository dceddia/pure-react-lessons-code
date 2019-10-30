const veggieDrawer = [
  '3 apples',
  '2 bad tomatoes',
  'fresh celery',
  '4 good onions',
  '1 bad onion',
  'rotten cilantro',
  '2 rotten red peppers',
  'garlic'
];

function reducer(bucket, item, index, array) {
  console.log(bucket, item);
  if (
    item.includes('bad') ||
    item.includes('rotten')
  ) {
    return bucket;
  }

  const count = parseInt(item);
  bucket.veggies.push(item);
  bucket.howMany += isNaN(count) ? 1 : count;

  // You have 9 veggies: a, b, c
  if (index === array.length - 1) {
    return `You have ${
      bucket.howMany
    } veggies: ${bucket.veggies.join(', ')}`;
  }

  return bucket;
}
const initialValue = {
  veggies: [],
  howMany: 0
};
const goodVeggies = veggieDrawer.reduce(
  reducer,
  initialValue
);
console.log('result', goodVeggies);

