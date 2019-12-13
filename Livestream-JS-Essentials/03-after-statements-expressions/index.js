// Statements vs. Expressions

console.log(
  (function iife() {
    console.log('yay!!');
    return 42;
  })()
);
